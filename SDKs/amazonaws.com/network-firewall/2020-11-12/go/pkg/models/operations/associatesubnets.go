package operations

import (
"openapi/pkg/models/shared")


type AssociateSubnetsXAmzTargetEnum string

const (
    AssociateSubnetsXAmzTargetEnumNetworkFirewall20201112AssociateSubnets AssociateSubnetsXAmzTargetEnum = "NetworkFirewall_20201112.AssociateSubnets"
)


type AssociateSubnetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateSubnetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateSubnetsRequest struct {
    Headers AssociateSubnetsHeaders 
    Request shared.AssociateSubnetsRequest `request:"mediaType=application/json"`
    
}

type AssociateSubnetsResponse struct {
    AssociateSubnetsResponse *shared.AssociateSubnetsResponse 
    ContentType string 
    InsufficientCapacityException *interface{} 
    InternalServerError *interface{} 
    InvalidOperationException *interface{} 
    InvalidRequestException *interface{} 
    InvalidTokenException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

