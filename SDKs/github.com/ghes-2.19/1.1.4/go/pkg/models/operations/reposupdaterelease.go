package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateReleasePathParams struct {
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	ReleaseID int64  `pathParam:"style=simple,explode=false,name=release_id"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateReleaseRequestBody struct {
	Body            *string `json:"body,omitempty"`
	Draft           *bool   `json:"draft,omitempty"`
	Name            *string `json:"name,omitempty"`
	Prerelease      *bool   `json:"prerelease,omitempty"`
	TagName         *string `json:"tag_name,omitempty"`
	TargetCommitish *string `json:"target_commitish,omitempty"`
}

type ReposUpdateReleaseRequest struct {
	PathParams ReposUpdateReleasePathParams
	Request    *ReposUpdateReleaseRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateReleaseResponse struct {
	ContentType string
	StatusCode  int64
	Release     *shared.Release
}
