package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeCardDetailsPathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type ChangeCardDetailsQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type ChangeCardDetailsSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ChangeCardDetailsRequest struct {
	PathParams  ChangeCardDetailsPathParams
	QueryParams ChangeCardDetailsQueryParams
	Request     shared.ItvChangeCardDetailsRequest `request:"mediaType=application/json"`
	Security    ChangeCardDetailsSecurity
}

type ChangeCardDetailsResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
