package operations

import (
	"openapi/pkg/models/shared"
)

type PatchVpcPathParams struct {
	VpcID string `pathParam:"style=simple,explode=false,name=vpc_id"`
}

type PatchVpcRequestBody struct {
	Default     *bool   `json:"default"`
	Description *string `json:"description"`
	Name        *string `json:"name"`
}

type PatchVpcRequest struct {
	PathParams PatchVpcPathParams
	Request    PatchVpcRequestBody `request:"mediaType=application/json"`
}

type PatchVpc200ApplicationJSON struct {
	Vpc *shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems `json:"vpc"`
}

type PatchVpc401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type PatchVpcResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PatchVpc200ApplicationJSONObject                          *PatchVpc200ApplicationJSON
	PatchVpc401ApplicationJSONObject                          *PatchVpc401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
