package operations

import (
"openapi/pkg/models/shared")


type ListReceivedLicensesXAmzTargetEnum string

const (
    ListReceivedLicensesXAmzTargetEnumAwsLicenseManagerListReceivedLicenses ListReceivedLicensesXAmzTargetEnum = "AWSLicenseManager.ListReceivedLicenses"
)


type ListReceivedLicensesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListReceivedLicensesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListReceivedLicensesRequest struct {
    Headers ListReceivedLicensesHeaders 
    Request shared.ListReceivedLicensesRequest `request:"mediaType=application/json"`
    
}

type ListReceivedLicensesResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListReceivedLicensesResponse *shared.ListReceivedLicensesResponse 
    RateLimitExceededException *interface{} 
    ResourceLimitExceededException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

