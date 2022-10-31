package operations

import (
	"openapi/pkg/models/shared"
)

type GetCardDetailsPathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type GetCardDetailsQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetCardDetailsSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetCardDetailsRequest struct {
	PathParams  GetCardDetailsPathParams
	QueryParams GetCardDetailsQueryParams
	Request     shared.ItvGetCardDetailsRequest `request:"mediaType=application/json"`
	Security    GetCardDetailsSecurity
}

type GetCardDetailsResponse struct {
	ContentType    string
	ItvCardDetails *shared.ItvCardDetails
	ServiceError   *shared.ServiceError
	StatusCode     int64
}
