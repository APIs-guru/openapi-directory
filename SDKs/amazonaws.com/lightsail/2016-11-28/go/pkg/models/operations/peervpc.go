package operations

import (
"openapi/pkg/models/shared")


type PeerVpcXAmzTargetEnum string

const (
    PeerVpcXAmzTargetEnumLightsail20161128PeerVpc PeerVpcXAmzTargetEnum = "Lightsail_20161128.PeerVpc"
)


type PeerVpcHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PeerVpcXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PeerVpcRequest struct {
    Headers PeerVpcHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PeerVpcResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    PeerVpcResult *shared.PeerVpcResult 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

