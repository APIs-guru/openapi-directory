package operations

import (
"openapi/pkg/models/shared")


type EnableAwsServiceAccessXAmzTargetEnum string

const (
    EnableAwsServiceAccessXAmzTargetEnumAwsOrganizationsV20161128EnableAwsServiceAccess EnableAwsServiceAccessXAmzTargetEnum = "AWSOrganizationsV20161128.EnableAWSServiceAccess"
)


type EnableAwsServiceAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget EnableAwsServiceAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type EnableAwsServiceAccessRequest struct {
    Headers EnableAwsServiceAccessHeaders 
    Request shared.EnableAwsServiceAccessRequest `request:"mediaType=application/json"`
    
}

type EnableAwsServiceAccessResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ConcurrentModificationException *interface{} 
    ConstraintViolationException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnsupportedAPIEndpointException *interface{} 
    
}

