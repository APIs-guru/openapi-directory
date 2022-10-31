package operations

import (
"openapi/pkg/models/shared")


type CreateLicenseVersionXAmzTargetEnum string

const (
    CreateLicenseVersionXAmzTargetEnumAwsLicenseManagerCreateLicenseVersion CreateLicenseVersionXAmzTargetEnum = "AWSLicenseManager.CreateLicenseVersion"
)


type CreateLicenseVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLicenseVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLicenseVersionRequest struct {
    Headers CreateLicenseVersionHeaders 
    Request shared.CreateLicenseVersionRequest `request:"mediaType=application/json"`
    
}

type CreateLicenseVersionResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateLicenseVersionResponse *shared.CreateLicenseVersionResponse 
    RateLimitExceededException *interface{} 
    RedirectException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

