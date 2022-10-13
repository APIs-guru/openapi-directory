package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetClonesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetClonesQueryParams struct {
	Per *shared.PerEnum `queryParam:"style=form,explode=true,name=per"`
}

type ReposGetClonesRequest struct {
	PathParams  ReposGetClonesPathParams
	QueryParams ReposGetClonesQueryParams
}

type ReposGetClonesResponse struct {
	ContentType  string
	StatusCode   int64
	BasicError   *shared.BasicError
	CloneTraffic *shared.CloneTraffic
}
