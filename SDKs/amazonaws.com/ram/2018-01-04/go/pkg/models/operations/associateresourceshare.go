package operations

import (
"openapi/pkg/models/shared")

type AssociateResourceShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AssociateResourceShareRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    Principals []string `json:"principals,omitempty"`
    ResourceArns []string `json:"resourceArns,omitempty"`
    ResourceShareArn string `json:"resourceShareArn"`
    
}

type AssociateResourceShareRequest struct {
    Headers AssociateResourceShareHeaders 
    Request AssociateResourceShareRequestBody `request:"mediaType=application/json"`
    
}

type AssociateResourceShareResponse struct {
    AssociateResourceShareResponse *shared.AssociateResourceShareResponse 
    ContentType string 
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
    UnknownResourceException *interface{} 
    
}

