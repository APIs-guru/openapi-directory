package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateReleasePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateReleaseRequestBody struct {
	Body            *string `json:"body,omitempty"`
	Draft           *bool   `json:"draft,omitempty"`
	Name            *string `json:"name,omitempty"`
	Prerelease      *bool   `json:"prerelease,omitempty"`
	TagName         string  `json:"tag_name"`
	TargetCommitish *string `json:"target_commitish,omitempty"`
}

type ReposCreateReleaseRequest struct {
	PathParams ReposCreateReleasePathParams
	Request    *ReposCreateReleaseRequestBody `request:"mediaType=application/json"`
}

type ReposCreateReleaseResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	Release         *shared.Release
	ValidationError *shared.ValidationError
}
