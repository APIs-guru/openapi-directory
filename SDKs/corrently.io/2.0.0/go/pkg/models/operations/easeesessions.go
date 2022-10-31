package operations

import (
	"openapi/pkg/models/shared"
)

type EaseeSessionsQueryParams struct {
	Password *string `queryParam:"style=form,explode=true,name=password"`
	Username *string `queryParam:"style=form,explode=true,name=username"`
}

type EaseeSessionsRequest struct {
	QueryParams EaseeSessionsQueryParams
}

type EaseeSessionsResponse struct {
	ContentType   string
	StatusCode    int64
	EaseeChargers []shared.EaseeCharger
}
