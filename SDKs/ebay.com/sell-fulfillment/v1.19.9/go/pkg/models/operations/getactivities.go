package operations

import (
	"openapi/pkg/models/shared"
)

var GetActivitiesServerList = []string{
	"https://apiz.ebay.com{basePath}",
}

type GetActivitiesPathParams struct {
	PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
}

type GetActivitiesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetActivitiesRequest struct {
	ServerURL  *string
	PathParams GetActivitiesPathParams
	Security   GetActivitiesSecurity
}

type GetActivitiesResponse struct {
	ContentType                   string
	PaymentDisputeActivityHistory *shared.PaymentDisputeActivityHistory
	StatusCode                    int64
}
