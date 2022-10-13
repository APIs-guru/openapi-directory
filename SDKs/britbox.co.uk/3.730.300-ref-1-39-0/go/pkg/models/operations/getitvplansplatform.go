package operations

import (
	"openapi/pkg/models/shared"
)

type GetItvPlansPlatformPathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type GetItvPlansPlatformQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetItvPlansPlatformSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetItvPlansPlatformRequest struct {
	PathParams  GetItvPlansPlatformPathParams
	QueryParams GetItvPlansPlatformQueryParams
	Security    GetItvPlansPlatformSecurity
}

type GetItvPlansPlatformResponse struct {
	ContentType  string
	ItvPlans     *shared.ItvPlans
	ServiceError *shared.ServiceError
	StatusCode   int64
}
