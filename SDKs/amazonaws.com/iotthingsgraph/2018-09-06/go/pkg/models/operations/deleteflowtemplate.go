package operations

import (
"openapi/pkg/models/shared")


type DeleteFlowTemplateXAmzTargetEnum string

const (
    DeleteFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteFlowTemplate DeleteFlowTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.DeleteFlowTemplate"
)


type DeleteFlowTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteFlowTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteFlowTemplateRequest struct {
    Headers DeleteFlowTemplateHeaders 
    Request shared.DeleteFlowTemplateRequest `request:"mediaType=application/json"`
    
}

type DeleteFlowTemplateResponse struct {
    ContentType string 
    DeleteFlowTemplateResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

