package operations

import (
"openapi/pkg/models/shared")


type UpdateEnvironmentTemplateXAmzTargetEnum string

const (
    UpdateEnvironmentTemplateXAmzTargetEnumAwsProton20200720UpdateEnvironmentTemplate UpdateEnvironmentTemplateXAmzTargetEnum = "AwsProton20200720.UpdateEnvironmentTemplate"
)


type UpdateEnvironmentTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateEnvironmentTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateEnvironmentTemplateRequest struct {
    Headers UpdateEnvironmentTemplateHeaders 
    Request shared.UpdateEnvironmentTemplateInput `request:"mediaType=application/json"`
    
}

type UpdateEnvironmentTemplateResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateEnvironmentTemplateOutput *shared.UpdateEnvironmentTemplateOutput 
    ValidationException *interface{} 
    
}

