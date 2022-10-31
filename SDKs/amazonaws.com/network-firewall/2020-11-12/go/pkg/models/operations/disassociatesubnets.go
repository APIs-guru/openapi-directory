package operations

import (
"openapi/pkg/models/shared")


type DisassociateSubnetsXAmzTargetEnum string

const (
    DisassociateSubnetsXAmzTargetEnumNetworkFirewall20201112DisassociateSubnets DisassociateSubnetsXAmzTargetEnum = "NetworkFirewall_20201112.DisassociateSubnets"
)


type DisassociateSubnetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateSubnetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateSubnetsRequest struct {
    Headers DisassociateSubnetsHeaders 
    Request shared.DisassociateSubnetsRequest `request:"mediaType=application/json"`
    
}

type DisassociateSubnetsResponse struct {
    ContentType string 
    DisassociateSubnetsResponse *shared.DisassociateSubnetsResponse 
    InternalServerError *interface{} 
    InvalidOperationException *interface{} 
    InvalidRequestException *interface{} 
    InvalidTokenException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

