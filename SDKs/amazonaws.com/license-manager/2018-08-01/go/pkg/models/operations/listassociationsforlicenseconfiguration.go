package operations

import (
"openapi/pkg/models/shared")


type ListAssociationsForLicenseConfigurationXAmzTargetEnum string

const (
    ListAssociationsForLicenseConfigurationXAmzTargetEnumAwsLicenseManagerListAssociationsForLicenseConfiguration ListAssociationsForLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.ListAssociationsForLicenseConfiguration"
)


type ListAssociationsForLicenseConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAssociationsForLicenseConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAssociationsForLicenseConfigurationRequest struct {
    Headers ListAssociationsForLicenseConfigurationHeaders 
    Request shared.ListAssociationsForLicenseConfigurationRequest `request:"mediaType=application/json"`
    
}

type ListAssociationsForLicenseConfigurationResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ContentType string 
    FilterLimitExceededException *interface{} 
    InvalidParameterValueException *interface{} 
    ListAssociationsForLicenseConfigurationResponse *shared.ListAssociationsForLicenseConfigurationResponse 
    RateLimitExceededException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    
}

