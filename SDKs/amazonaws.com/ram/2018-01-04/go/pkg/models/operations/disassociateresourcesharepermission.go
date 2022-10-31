package operations

import (
"openapi/pkg/models/shared")

type DisassociateResourceSharePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DisassociateResourceSharePermissionRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    PermissionArn string `json:"permissionArn"`
    ResourceShareArn string `json:"resourceShareArn"`
    
}

type DisassociateResourceSharePermissionRequest struct {
    Headers DisassociateResourceSharePermissionHeaders 
    Request DisassociateResourceSharePermissionRequestBody `request:"mediaType=application/json"`
    
}

type DisassociateResourceSharePermissionResponse struct {
    ContentType string 
    DisassociateResourceSharePermissionResponse *shared.DisassociateResourceSharePermissionResponse 
    InvalidClientTokenException *interface{} 
    InvalidParameterException *interface{} 
    InvalidStateTransitionException *interface{} 
    MalformedArnException *interface{} 
    OperationNotPermittedException *interface{} 
    ServerInternalException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnknownResourceException *interface{} 
    
}

