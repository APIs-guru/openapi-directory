package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrdersIDShipPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutOrdersIDShipOrderShipV2 struct {
	TrackingNumber string   `json:"trackingNumber"`
	WeightOverride *float32 `json:"weightOverride,omitempty"`
}

type PutOrdersIDShipSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type PutOrdersIDShipRequest struct {
	PathParams PutOrdersIDShipPathParams
	Request    PutOrdersIDShipOrderShipV2 `request:"mediaType=application/json"`
	Security   PutOrdersIDShipSecurity
}

type PutOrdersIDShipResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	OneordersPostResponses201ContentApplication1jsonSchema *shared.OneordersPostResponses201ContentApplication1jsonSchema
}
