package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetTopPathsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetTopPathsRequest struct {
	PathParams ReposGetTopPathsPathParams
}

type ReposGetTopPathsResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ContentTraffics []shared.ContentTraffic
}
