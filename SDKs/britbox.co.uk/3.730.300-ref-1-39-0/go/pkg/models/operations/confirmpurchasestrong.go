package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmPurchaseStrongPathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type ConfirmPurchaseStrongQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type ConfirmPurchaseStrongSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ConfirmPurchaseStrongRequest struct {
	PathParams  ConfirmPurchaseStrongPathParams
	QueryParams ConfirmPurchaseStrongQueryParams
	Request     shared.ItvPurchaseStrongRequest `request:"mediaType=application/json"`
	Security    ConfirmPurchaseStrongSecurity
}

type ConfirmPurchaseStrongResponse struct {
	ContentType               string
	ItvPurchaseStrongResponse *shared.ItvPurchaseStrongResponse
	ServiceError              *shared.ServiceError
	StatusCode                int64
}
