package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlanByTokenPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type GetPlanByTokenQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetPlanByTokenRequest struct {
	PathParams  GetPlanByTokenPathParams
	QueryParams GetPlanByTokenQueryParams
}

type GetPlanByTokenResponse struct {
	BtPlanListItem *shared.BtPlanListItem
	ContentType    string
	ServiceError   *shared.ServiceError
	StatusCode     int64
}
