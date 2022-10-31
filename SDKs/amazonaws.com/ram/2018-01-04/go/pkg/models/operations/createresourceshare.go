package operations

import (
"openapi/pkg/models/shared")

type CreateResourceShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateResourceShareRequestBody struct {
    AllowExternalPrincipals *bool `json:"allowExternalPrincipals,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    Name string `json:"name"`
    PermissionArns []string `json:"permissionArns,omitempty"`
    Principals []string `json:"principals,omitempty"`
    ResourceArns []string `json:"resourceArns,omitempty"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreateResourceShareRequest struct {
    Headers CreateResourceShareHeaders 
    Request CreateResourceShareRequestBody `request:"mediaType=application/json"`
    
}

type CreateResourceShareResponse struct {
    ContentType string 
    CreateResourceShareResponse *shared.CreateResourceShareResponse 
    IdempotentParameterMismatchException *interface{} 
    InvalidClientTokenException *interface{} 
    InvalidParameterException *interface{} 
    InvalidStateTransitionException *interface{} 
    MalformedArnException *interface{} 
    OperationNotPermittedException *interface{} 
    ResourceShareLimitExceededException *interface{} 
    ServerInternalException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TagPolicyViolationException *interface{} 
    UnknownResourceException *interface{} 
    
}

