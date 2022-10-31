package operations

import (
"openapi/pkg/models/shared")

type UpdateVpcPathParams struct {
    VpcID string `pathParam:"style=simple,explode=false,name=vpc_id"`
    
}

type UpdateVpcRequestBody struct {
    Default *bool `json:"default,omitempty"`
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    
}

type UpdateVpcRequest struct {
    PathParams UpdateVpcPathParams 
    Request UpdateVpcRequestBody `request:"mediaType=application/json"`
    
}

type UpdateVpc200ApplicationJSON struct {
    Vpc *shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems `json:"vpc,omitempty"`
    
}

type UpdateVpc401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateVpcResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateVpc200ApplicationJSONObject *UpdateVpc200ApplicationJSON 
    UpdateVpc401ApplicationJSONObject *UpdateVpc401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

