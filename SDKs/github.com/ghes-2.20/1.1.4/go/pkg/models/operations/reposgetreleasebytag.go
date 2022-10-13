package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetReleaseByTagPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	Tag   string `pathParam:"style=simple,explode=false,name=tag"`
}

type ReposGetReleaseByTagRequest struct {
	PathParams ReposGetReleaseByTagPathParams
}

type ReposGetReleaseByTagResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Release     *shared.Release
}
