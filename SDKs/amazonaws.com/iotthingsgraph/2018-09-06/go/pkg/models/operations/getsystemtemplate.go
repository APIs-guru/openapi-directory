package operations

import (
"openapi/pkg/models/shared")


type GetSystemTemplateXAmzTargetEnum string

const (
    GetSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemTemplate GetSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.GetSystemTemplate"
)


type GetSystemTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSystemTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSystemTemplateRequest struct {
    Headers GetSystemTemplateHeaders 
    Request shared.GetSystemTemplateRequest `request:"mediaType=application/json"`
    
}

type GetSystemTemplateResponse struct {
    ContentType string 
    GetSystemTemplateResponse *shared.GetSystemTemplateResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

