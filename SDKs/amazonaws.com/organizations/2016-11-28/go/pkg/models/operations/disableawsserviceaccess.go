package operations

import (
"openapi/pkg/models/shared")


type DisableAwsServiceAccessXAmzTargetEnum string

const (
    DisableAwsServiceAccessXAmzTargetEnumAwsOrganizationsV20161128DisableAwsServiceAccess DisableAwsServiceAccessXAmzTargetEnum = "AWSOrganizationsV20161128.DisableAWSServiceAccess"
)


type DisableAwsServiceAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableAwsServiceAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableAwsServiceAccessRequest struct {
    Headers DisableAwsServiceAccessHeaders 
    Request shared.DisableAwsServiceAccessRequest `request:"mediaType=application/json"`
    
}

type DisableAwsServiceAccessResponse struct {
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

