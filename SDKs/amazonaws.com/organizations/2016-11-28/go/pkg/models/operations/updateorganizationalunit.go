package operations

import (
"openapi/pkg/models/shared")


type UpdateOrganizationalUnitXAmzTargetEnum string

const (
    UpdateOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128UpdateOrganizationalUnit UpdateOrganizationalUnitXAmzTargetEnum = "AWSOrganizationsV20161128.UpdateOrganizationalUnit"
)


type UpdateOrganizationalUnitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateOrganizationalUnitXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateOrganizationalUnitRequest struct {
    Headers UpdateOrganizationalUnitHeaders 
    Request shared.UpdateOrganizationalUnitRequest `request:"mediaType=application/json"`
    
}

type UpdateOrganizationalUnitResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    DuplicateOrganizationalUnitException *interface{} 
    InvalidInputException *interface{} 
    OrganizationalUnitNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateOrganizationalUnitResponse *shared.UpdateOrganizationalUnitResponse 
    
}

