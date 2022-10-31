package operations

import (
"openapi/pkg/models/shared")


type GetServiceTemplateVersionXAmzTargetEnum string

const (
    GetServiceTemplateVersionXAmzTargetEnumAwsProton20200720GetServiceTemplateVersion GetServiceTemplateVersionXAmzTargetEnum = "AwsProton20200720.GetServiceTemplateVersion"
)


type GetServiceTemplateVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetServiceTemplateVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetServiceTemplateVersionRequest struct {
    Headers GetServiceTemplateVersionHeaders 
    Request shared.GetServiceTemplateVersionInput `request:"mediaType=application/json"`
    
}

type GetServiceTemplateVersionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetServiceTemplateVersionOutput *shared.GetServiceTemplateVersionOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

