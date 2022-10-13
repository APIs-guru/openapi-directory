package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntitlementsHistoryQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetEntitlementsHistorySecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetEntitlementsHistoryRequest struct {
	QueryParams GetEntitlementsHistoryQueryParams
	Security    GetEntitlementsHistorySecurity
}

type GetEntitlementsHistoryResponse struct {
	ContentType            string
	ItvEntitlementsHistory *shared.ItvEntitlementsHistory
	ServiceError           *shared.ServiceError
	StatusCode             int64
}
