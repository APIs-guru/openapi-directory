package operations

import (
"openapi/pkg/models/shared")


type CreateGrantXAmzTargetEnum string

const (
    CreateGrantXAmzTargetEnumAwsLicenseManagerCreateGrant CreateGrantXAmzTargetEnum = "AWSLicenseManager.CreateGrant"
)


type CreateGrantHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateGrantXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateGrantRequest struct {
    Headers CreateGrantHeaders 
    Request shared.CreateGrantRequest `request:"mediaType=application/json"`
    
}

type CreateGrantResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ContentType string 
    CreateGrantResponse *shared.CreateGrantResponse 
    InvalidParameterValueException *interface{} 
    RateLimitExceededException *interface{} 
    ResourceLimitExceededException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

