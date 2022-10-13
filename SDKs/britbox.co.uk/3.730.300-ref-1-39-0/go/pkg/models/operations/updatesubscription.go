package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateSubscriptionQueryParams struct {
	Ff     []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang   *string                   `queryParam:"style=form,explode=true,name=lang"`
	PlanID *string                   `queryParam:"style=form,explode=true,name=planId"`
}

type UpdateSubscriptionSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type UpdateSubscriptionRequest struct {
	PathParams  UpdateSubscriptionPathParams
	QueryParams UpdateSubscriptionQueryParams
	Security    UpdateSubscriptionSecurity
}

type UpdateSubscriptionResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
