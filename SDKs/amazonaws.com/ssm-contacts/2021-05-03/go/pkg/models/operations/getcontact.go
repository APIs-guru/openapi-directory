package operations

import (
"openapi/pkg/models/shared")


type GetContactXAmzTargetEnum string

const (
    GetContactXAmzTargetEnumSsmContactsGetContact GetContactXAmzTargetEnum = "SSMContacts.GetContact"
)


type GetContactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetContactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetContactRequest struct {
    Headers GetContactHeaders 
    Request shared.GetContactRequest `request:"mediaType=application/json"`
    
}

type GetContactResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DataEncryptionException *interface{} 
    GetContactResult *shared.GetContactResult 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

