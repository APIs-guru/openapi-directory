package operations

import (
"openapi/pkg/models/shared")


type DeleteContactChannelXAmzTargetEnum string

const (
    DeleteContactChannelXAmzTargetEnumSsmContactsDeleteContactChannel DeleteContactChannelXAmzTargetEnum = "SSMContacts.DeleteContactChannel"
)


type DeleteContactChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteContactChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteContactChannelRequest struct {
    Headers DeleteContactChannelHeaders 
    Request shared.DeleteContactChannelRequest `request:"mediaType=application/json"`
    
}

type DeleteContactChannelResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteContactChannelResult map[string]interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

