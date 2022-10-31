package operations

import (
"openapi/pkg/models/shared")


type CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum string

const (
    CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceCreateInstanceAccessControlAttributeConfiguration CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum = "SWBExternalService.CreateInstanceAccessControlAttributeConfiguration"
)


type CreateInstanceAccessControlAttributeConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateInstanceAccessControlAttributeConfigurationRequest struct {
    Headers CreateInstanceAccessControlAttributeConfigurationHeaders 
    Request shared.CreateInstanceAccessControlAttributeConfigurationRequest `request:"mediaType=application/json"`
    
}

type CreateInstanceAccessControlAttributeConfigurationResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateInstanceAccessControlAttributeConfigurationResponse map[string]interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

