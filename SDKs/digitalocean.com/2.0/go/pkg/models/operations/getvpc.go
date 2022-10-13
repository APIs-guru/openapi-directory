package operations

import (
	"openapi/pkg/models/shared"
)

type GetVpcPathParams struct {
	VpcID string `pathParam:"style=simple,explode=false,name=vpc_id"`
}

type GetVpcRequest struct {
	PathParams GetVpcPathParams
}

type GetVpc200ApplicationJSON struct {
	Vpc *shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems `json:"vpc"`
}

type GetVpc401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetVpcResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetVpc200ApplicationJSONObject                            *GetVpc200ApplicationJSON
	GetVpc401ApplicationJSONObject                            *GetVpc401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
