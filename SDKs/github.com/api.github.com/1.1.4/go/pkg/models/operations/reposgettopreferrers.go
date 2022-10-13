package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetTopReferrersPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetTopReferrersRequest struct {
	PathParams ReposGetTopReferrersPathParams
}

type ReposGetTopReferrersResponse struct {
	ContentType      string
	StatusCode       int64
	BasicError       *shared.BasicError
	ReferrerTraffics []shared.ReferrerTraffic
}
