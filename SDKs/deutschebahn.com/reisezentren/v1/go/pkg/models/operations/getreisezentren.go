package operations

import (
	"openapi/pkg/models/shared"
)

type GetReisezentrenQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type GetReisezentrenRequest struct {
	QueryParams GetReisezentrenQueryParams
}

type GetReisezentrenResponse struct {
	ContentType      string
	Error            *shared.Error
	StatusCode       int64
	TravelCenterList []shared.TravelCenter
}
