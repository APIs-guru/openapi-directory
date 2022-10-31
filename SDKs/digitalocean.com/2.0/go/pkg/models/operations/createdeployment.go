package operations

import (
"openapi/pkg/models/shared")

type CreateDeploymentPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    
}

type CreateDeploymentRequestBody struct {
    ForceBuild *bool `json:"force_build,omitempty"`
    
}

type CreateDeploymentRequest struct {
    PathParams CreateDeploymentPathParams 
    Request CreateDeploymentRequestBody `request:"mediaType=application/json"`
    
}

type CreateDeployment200ApplicationJSON struct {
    Deployment *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems `json:"deployment,omitempty"`
    
}

type CreateDeployment401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateDeploymentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateDeployment200ApplicationJSONObject *CreateDeployment200ApplicationJSON 
    CreateDeployment401ApplicationJSONObject *CreateDeployment401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

