package operations

import (
"openapi/pkg/models/shared")


type UpdatePolicyXAmzTargetEnum string

const (
    UpdatePolicyXAmzTargetEnumAwsOrganizationsV20161128UpdatePolicy UpdatePolicyXAmzTargetEnum = "AWSOrganizationsV20161128.UpdatePolicy"
)


type UpdatePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdatePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdatePolicyRequest struct {
    Headers UpdatePolicyHeaders 
    Request shared.UpdatePolicyRequest `request:"mediaType=application/json"`
    
}

type UpdatePolicyResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ConcurrentModificationException *interface{} 
    ConstraintViolationException *interface{} 
    ContentType string 
    DuplicatePolicyException *interface{} 
    InvalidInputException *interface{} 
    MalformedPolicyDocumentException *interface{} 
    PolicyChangesInProgressException *interface{} 
    PolicyNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnsupportedAPIEndpointException *interface{} 
    UpdatePolicyResponse *shared.UpdatePolicyResponse 
    
}

