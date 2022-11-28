package operations

import (
	"openapi/pkg/models/shared"
)

type PullsMergePathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsMergeRequestBodyMergeMethodEnum string

const (
	PullsMergeRequestBodyMergeMethodEnumMerge  PullsMergeRequestBodyMergeMethodEnum = "merge"
	PullsMergeRequestBodyMergeMethodEnumSquash PullsMergeRequestBodyMergeMethodEnum = "squash"
	PullsMergeRequestBodyMergeMethodEnumRebase PullsMergeRequestBodyMergeMethodEnum = "rebase"
)

type PullsMergeRequestBody struct {
	CommitMessage *string                               `json:"commit_message,omitempty"`
	CommitTitle   *string                               `json:"commit_title,omitempty"`
	MergeMethod   *PullsMergeRequestBodyMergeMethodEnum `json:"merge_method,omitempty"`
	Sha           *string                               `json:"sha,omitempty"`
}

type PullsMerge405ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type PullsMerge409ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type PullsMergeRequest struct {
	PathParams PullsMergePathParams
	Request    *PullsMergeRequestBody `request:"mediaType=application/json"`
}

type PullsMergeResponse struct {
	ContentType                        string
	StatusCode                         int64
	BasicError                         *shared.BasicError
	PullRequestMergeResult             *shared.PullRequestMergeResult
	PullsMerge405ApplicationJSONObject *PullsMerge405ApplicationJSON
	PullsMerge409ApplicationJSONObject *PullsMerge409ApplicationJSON
	ValidationError                    *shared.ValidationError
}
