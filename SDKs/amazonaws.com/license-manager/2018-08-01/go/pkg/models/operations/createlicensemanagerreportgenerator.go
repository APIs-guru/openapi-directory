package operations

import (
"openapi/pkg/models/shared")


type CreateLicenseManagerReportGeneratorXAmzTargetEnum string

const (
    CreateLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerCreateLicenseManagerReportGenerator CreateLicenseManagerReportGeneratorXAmzTargetEnum = "AWSLicenseManager.CreateLicenseManagerReportGenerator"
)


type CreateLicenseManagerReportGeneratorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLicenseManagerReportGeneratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLicenseManagerReportGeneratorRequest struct {
    Headers CreateLicenseManagerReportGeneratorHeaders 
    Request shared.CreateLicenseManagerReportGeneratorRequest `request:"mediaType=application/json"`
    
}

type CreateLicenseManagerReportGeneratorResponse struct {
    AccessDeniedException *interface{} 
    AuthorizationException *interface{} 
    ContentType string 
    CreateLicenseManagerReportGeneratorResponse *shared.CreateLicenseManagerReportGeneratorResponse 
    InvalidParameterValueException *interface{} 
    RateLimitExceededException *interface{} 
    ResourceLimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerInternalException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

