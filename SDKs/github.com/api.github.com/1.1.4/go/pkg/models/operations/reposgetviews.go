package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetViewsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetViewsQueryParams struct {
	Per *shared.PerEnum `queryParam:"style=form,explode=true,name=per"`
}

type ReposGetViewsRequest struct {
	PathParams  ReposGetViewsPathParams
	QueryParams ReposGetViewsQueryParams
}

type ReposGetViewsResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	ViewTraffic *shared.ViewTraffic
}
