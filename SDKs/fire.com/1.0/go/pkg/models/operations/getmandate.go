package operations

import (
"openapi/pkg/models/shared")

type GetMandatePathParams struct {
    MandateUUID string `pathParam:"style=simple,explode=false,name=mandateUuid"`
    
}

type GetMandateRequest struct {
    PathParams GetMandatePathParams 
    
}

type GetMandateResponse struct {
    ContentType string 
    StatusCode int64 
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems *shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems 
    
}

