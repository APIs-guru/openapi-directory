package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateReleasePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateReleaseRequestBody struct {
	Body            *string `json:"body"`
	Draft           *bool   `json:"draft"`
	Name            *string `json:"name"`
	Prerelease      *bool   `json:"prerelease"`
	TagName         string  `json:"tag_name"`
	TargetCommitish *string `json:"target_commitish"`
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
