package operations

import (
"openapi/pkg/models/shared")


type DescribeFirewallXAmzTargetEnum string

const (
    DescribeFirewallXAmzTargetEnumNetworkFirewall20201112DescribeFirewall DescribeFirewallXAmzTargetEnum = "NetworkFirewall_20201112.DescribeFirewall"
)


type DescribeFirewallHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeFirewallXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeFirewallRequest struct {
    Headers DescribeFirewallHeaders 
    Request shared.DescribeFirewallRequest `request:"mediaType=application/json"`
    
}

type DescribeFirewallResponse struct {
    ContentType string 
    DescribeFirewallResponse *shared.DescribeFirewallResponse 
    InternalServerError *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

