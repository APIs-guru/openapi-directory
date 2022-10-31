package operations

import (
"openapi/pkg/models/shared")


type CreateServiceTemplateXAmzTargetEnum string

const (
    CreateServiceTemplateXAmzTargetEnumAwsProton20200720CreateServiceTemplate CreateServiceTemplateXAmzTargetEnum = "AwsProton20200720.CreateServiceTemplate"
)


type CreateServiceTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateServiceTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateServiceTemplateRequest struct {
    Headers CreateServiceTemplateHeaders 
    Request shared.CreateServiceTemplateInput `request:"mediaType=application/json"`
    
}

type CreateServiceTemplateResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateServiceTemplateOutput *shared.CreateServiceTemplateOutput 
    InternalServerException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

