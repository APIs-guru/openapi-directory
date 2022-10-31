package operations

import (
"openapi/pkg/models/shared")


type DeleteServiceTemplateVersionXAmzTargetEnum string

const (
    DeleteServiceTemplateVersionXAmzTargetEnumAwsProton20200720DeleteServiceTemplateVersion DeleteServiceTemplateVersionXAmzTargetEnum = "AwsProton20200720.DeleteServiceTemplateVersion"
)


type DeleteServiceTemplateVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteServiceTemplateVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteServiceTemplateVersionRequest struct {
    Headers DeleteServiceTemplateVersionHeaders 
    Request shared.DeleteServiceTemplateVersionInput `request:"mediaType=application/json"`
    
}

type DeleteServiceTemplateVersionResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteServiceTemplateVersionOutput *shared.DeleteServiceTemplateVersionOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

