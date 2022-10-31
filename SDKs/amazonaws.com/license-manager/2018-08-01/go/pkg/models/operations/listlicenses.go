package operations

import (
"openapi/pkg/models/shared")


type ListLicensesXAmzTargetEnum string

const (
    ListLicensesXAmzTargetEnumAwsLicenseManagerListLicenses ListLicensesXAmzTargetEnum = "AWSLicenseManager.ListLicenses"
)


type ListLicensesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListLicensesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListLicensesRequest struct {
    Headers ListLicensesHeaders 
    Request shared.ListLicensesRequest `request:"mediaType=application/json"`
    
}

type ListLicensesResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListLicensesResponse *shared.ListLicensesResponse 
    RateLimitExceededException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

