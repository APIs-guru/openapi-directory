package operations

import (
	"openapi/pkg/models/shared"
)

type GetCurrentEntitlementQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetCurrentEntitlementSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetCurrentEntitlementRequest struct {
	QueryParams GetCurrentEntitlementQueryParams
	Security    GetCurrentEntitlementSecurity
}

type GetCurrentEntitlementResponse struct {
	ContentType           string
	ItvEntitlementCurrent *shared.ItvEntitlementCurrent
	ServiceError          *shared.ServiceError
	StatusCode            int64
}
