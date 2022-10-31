package operations

import (
"openapi/pkg/models/shared")


type UpdateFirewallPolicyXAmzTargetEnum string

const (
    UpdateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112UpdateFirewallPolicy UpdateFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.UpdateFirewallPolicy"
)


type UpdateFirewallPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateFirewallPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateFirewallPolicyRequest struct {
    Headers UpdateFirewallPolicyHeaders 
    Request shared.UpdateFirewallPolicyRequest `request:"mediaType=application/json"`
    
}

type UpdateFirewallPolicyResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidRequestException *interface{} 
    InvalidTokenException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateFirewallPolicyResponse *shared.UpdateFirewallPolicyResponse 
    
}

