package operations

import (
"openapi/pkg/models/shared")


type ExtendLicenseConsumptionXAmzTargetEnum string

const (
    ExtendLicenseConsumptionXAmzTargetEnumAwsLicenseManagerExtendLicenseConsumption ExtendLicenseConsumptionXAmzTargetEnum = "AWSLicenseManager.ExtendLicenseConsumption"
)


type ExtendLicenseConsumptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ExtendLicenseConsumptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ExtendLicenseConsumptionRequest struct {
    Headers ExtendLicenseConsumptionHeaders 
    Request shared.ExtendLicenseConsumptionRequest `request:"mediaType=application/json"`
    
}

type ExtendLicenseConsumptionResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ContentType string 
    ExtendLicenseConsumptionResponse *shared.ExtendLicenseConsumptionResponse 
    InvalidParameterValueException *interface{} 
    RateLimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

