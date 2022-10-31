package operations

import (
"openapi/pkg/models/shared")


type AcceptPageXAmzTargetEnum string

const (
    AcceptPageXAmzTargetEnumSsmContactsAcceptPage AcceptPageXAmzTargetEnum = "SSMContacts.AcceptPage"
)


type AcceptPageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AcceptPageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AcceptPageRequest struct {
    Headers AcceptPageHeaders 
    Request shared.AcceptPageRequest `request:"mediaType=application/json"`
    
}

type AcceptPageResponse struct {
    AcceptPageResult map[string]interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

