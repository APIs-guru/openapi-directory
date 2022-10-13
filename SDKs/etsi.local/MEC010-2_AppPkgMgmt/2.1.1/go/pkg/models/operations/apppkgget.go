package operations

import (
	"openapi/pkg/models/shared"
)

type AppPkgGetPathParams struct {
	AppPkgID string `pathParam:"style=simple,explode=false,name=appPkgId"`
}

type AppPkgGetRequest struct {
	PathParams AppPkgGetPathParams
}

type AppPkgGetResponse struct {
	ContentType    string
	ProblemDetails *shared.ProblemDetails
	StatusCode     int64
}
