package operations

import (
	"openapi/pkg/models/shared"
)

type IndividualSubscriptionDeletePathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type IndividualSubscriptionDeleteRequest struct {
	PathParams IndividualSubscriptionDeletePathParams
}

type IndividualSubscriptionDeleteResponse struct {
	ContentType    string
	ProblemDetails *shared.ProblemDetails
	StatusCode     int64
}
