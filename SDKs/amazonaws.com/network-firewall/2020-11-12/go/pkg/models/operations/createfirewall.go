package operations

import (
"openapi/pkg/models/shared")


type CreateFirewallXAmzTargetEnum string

const (
    CreateFirewallXAmzTargetEnumNetworkFirewall20201112CreateFirewall CreateFirewallXAmzTargetEnum = "NetworkFirewall_20201112.CreateFirewall"
)


type CreateFirewallHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFirewallXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFirewallRequest struct {
    Headers CreateFirewallHeaders 
    Request shared.CreateFirewallRequest `request:"mediaType=application/json"`
    
}

type CreateFirewallResponse struct {
    ContentType string 
    CreateFirewallResponse *shared.CreateFirewallResponse 
    InsufficientCapacityException *interface{} 
    InternalServerError *interface{} 
    InvalidOperationException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

