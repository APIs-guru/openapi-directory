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
	Body            *string `json:"body"`
	Draft           *bool   `json:"draft"`
	Name            *string `json:"name"`
	Prerelease      *bool   `json:"prerelease"`
	TagName         *string `json:"tag_name"`
	TargetCommitish *string `json:"target_commitish"`
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
