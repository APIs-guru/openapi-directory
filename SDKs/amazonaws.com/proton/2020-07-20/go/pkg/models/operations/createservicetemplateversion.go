package operations

import (
"openapi/pkg/models/shared")


type CreateServiceTemplateVersionXAmzTargetEnum string

const (
    CreateServiceTemplateVersionXAmzTargetEnumAwsProton20200720CreateServiceTemplateVersion CreateServiceTemplateVersionXAmzTargetEnum = "AwsProton20200720.CreateServiceTemplateVersion"
)


type CreateServiceTemplateVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateServiceTemplateVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateServiceTemplateVersionRequest struct {
    Headers CreateServiceTemplateVersionHeaders 
    Request shared.CreateServiceTemplateVersionInput `request:"mediaType=application/json"`
    
}

type CreateServiceTemplateVersionResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateServiceTemplateVersionOutput *shared.CreateServiceTemplateVersionOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

