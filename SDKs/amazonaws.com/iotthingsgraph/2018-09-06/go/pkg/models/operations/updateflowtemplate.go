package operations

import (
"openapi/pkg/models/shared")


type UpdateFlowTemplateXAmzTargetEnum string

const (
    UpdateFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceUpdateFlowTemplate UpdateFlowTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.UpdateFlowTemplate"
)


type UpdateFlowTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateFlowTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateFlowTemplateRequest struct {
    Headers UpdateFlowTemplateHeaders 
    Request shared.UpdateFlowTemplateRequest `request:"mediaType=application/json"`
    
}

type UpdateFlowTemplateResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateFlowTemplateResponse *shared.UpdateFlowTemplateResponse 
    
}

