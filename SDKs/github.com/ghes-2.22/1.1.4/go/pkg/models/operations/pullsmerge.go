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
	CommitMessage *string                               `json:"commit_message"`
	CommitTitle   *string                               `json:"commit_title"`
	MergeMethod   *PullsMergeRequestBodyMergeMethodEnum `json:"merge_method"`
	Sha           *string                               `json:"sha"`
}

type PullsMergeRequest struct {
	PathParams PullsMergePathParams
	Request    *PullsMergeRequestBody `request:"mediaType=application/json"`
}

type PullsMerge405ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type PullsMerge409ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
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
