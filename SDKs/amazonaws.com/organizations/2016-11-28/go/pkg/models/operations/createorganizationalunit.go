package operations

import (
"openapi/pkg/models/shared")


type CreateOrganizationalUnitXAmzTargetEnum string

const (
    CreateOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128CreateOrganizationalUnit CreateOrganizationalUnitXAmzTargetEnum = "AWSOrganizationsV20161128.CreateOrganizationalUnit"
)


type CreateOrganizationalUnitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateOrganizationalUnitXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateOrganizationalUnitRequest struct {
    Headers CreateOrganizationalUnitHeaders 
    Request shared.CreateOrganizationalUnitRequest `request:"mediaType=application/json"`
    
}

type CreateOrganizationalUnitResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ConcurrentModificationException *interface{} 
    ConstraintViolationException *interface{} 
    ContentType string 
    CreateOrganizationalUnitResponse *shared.CreateOrganizationalUnitResponse 
    DuplicateOrganizationalUnitException *interface{} 
    InvalidInputException *interface{} 
    ParentNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

