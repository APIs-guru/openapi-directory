package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionDataPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSubscriptionDataRequest struct {
	PathParams GetSubscriptionDataPathParams
}

type GetSubscriptionDataResponse struct {
	ContentType         string
	ServiceError        *shared.ServiceError
	StatusCode          int64
	SubscriptionDetails *shared.SubscriptionDetails
}
