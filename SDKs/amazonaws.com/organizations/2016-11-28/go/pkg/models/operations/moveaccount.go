package operations

import (
"openapi/pkg/models/shared")


type MoveAccountXAmzTargetEnum string

const (
    MoveAccountXAmzTargetEnumAwsOrganizationsV20161128MoveAccount MoveAccountXAmzTargetEnum = "AWSOrganizationsV20161128.MoveAccount"
)


type MoveAccountHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget MoveAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type MoveAccountRequest struct {
    Headers MoveAccountHeaders 
    Request shared.MoveAccountRequest `request:"mediaType=application/json"`
    
}

type MoveAccountResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    AccountNotFoundException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    DestinationParentNotFoundException *interface{} 
    DuplicateAccountException *interface{} 
    InvalidInputException *interface{} 
    ServiceException *interface{} 
    SourceParentNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

