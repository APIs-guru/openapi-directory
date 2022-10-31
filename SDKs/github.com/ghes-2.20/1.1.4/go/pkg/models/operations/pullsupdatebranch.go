package operations

import (
	"openapi/pkg/models/shared"
)

type PullsUpdateBranchPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsUpdateBranchRequestBody struct {
	ExpectedHeadSha *string `json:"expected_head_sha,omitempty"`
}

type PullsUpdateBranchRequest struct {
	PathParams PullsUpdateBranchPathParams
	Request    *PullsUpdateBranchRequestBody `request:"mediaType=application/json"`
}

type PullsUpdateBranch202ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
	URL     *string `json:"url,omitempty"`
}

type PullsUpdateBranch415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type PullsUpdateBranchResponse struct {
	ContentType                               string
	StatusCode                                int64
	BasicError                                *shared.BasicError
	PullsUpdateBranch202ApplicationJSONObject *PullsUpdateBranch202ApplicationJSON
	PullsUpdateBranch415ApplicationJSONObject *PullsUpdateBranch415ApplicationJSON
	ValidationError                           *shared.ValidationError
}
