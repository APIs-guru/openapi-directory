package operations

import (
"openapi/pkg/models/shared")


type CreateFirewallPolicyXAmzTargetEnum string

const (
    CreateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112CreateFirewallPolicy CreateFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.CreateFirewallPolicy"
)


type CreateFirewallPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFirewallPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFirewallPolicyRequest struct {
    Headers CreateFirewallPolicyHeaders 
    Request shared.CreateFirewallPolicyRequest `request:"mediaType=application/json"`
    
}

type CreateFirewallPolicyResponse struct {
    ContentType string 
    CreateFirewallPolicyResponse *shared.CreateFirewallPolicyResponse 
    InsufficientCapacityException *interface{} 
    InternalServerError *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

