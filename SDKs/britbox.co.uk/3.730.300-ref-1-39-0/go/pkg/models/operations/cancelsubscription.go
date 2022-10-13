package operations

import (
	"openapi/pkg/models/shared"
)

type CancelSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CancelSubscriptionQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type CancelSubscriptionSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type CancelSubscriptionRequest struct {
	PathParams  CancelSubscriptionPathParams
	QueryParams CancelSubscriptionQueryParams
	Security    CancelSubscriptionSecurity
}

type CancelSubscriptionResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
