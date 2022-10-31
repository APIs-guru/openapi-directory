package operations

import (
"openapi/pkg/models/shared")


type AssociateFirewallPolicyXAmzTargetEnum string

const (
    AssociateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112AssociateFirewallPolicy AssociateFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.AssociateFirewallPolicy"
)


type AssociateFirewallPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateFirewallPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateFirewallPolicyRequest struct {
    Headers AssociateFirewallPolicyHeaders 
    Request shared.AssociateFirewallPolicyRequest `request:"mediaType=application/json"`
    
}

type AssociateFirewallPolicyResponse struct {
    AssociateFirewallPolicyResponse *shared.AssociateFirewallPolicyResponse 
    ContentType string 
    InternalServerError *interface{} 
    InvalidOperationException *interface{} 
    InvalidRequestException *interface{} 
    InvalidTokenException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

