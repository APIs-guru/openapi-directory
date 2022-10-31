package operations

import (
"openapi/pkg/models/shared")


type ListLicenseSpecificationsForResourceXAmzTargetEnum string

const (
    ListLicenseSpecificationsForResourceXAmzTargetEnumAwsLicenseManagerListLicenseSpecificationsForResource ListLicenseSpecificationsForResourceXAmzTargetEnum = "AWSLicenseManager.ListLicenseSpecificationsForResource"
)


type ListLicenseSpecificationsForResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListLicenseSpecificationsForResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListLicenseSpecificationsForResourceRequest struct {
    Headers ListLicenseSpecificationsForResourceHeaders 
    Request shared.ListLicenseSpecificationsForResourceRequest `request:"mediaType=application/json"`
    
}

type ListLicenseSpecificationsForResourceResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListLicenseSpecificationsForResourceResponse *shared.ListLicenseSpecificationsForResourceResponse 
    RateLimitExceededException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    
}

