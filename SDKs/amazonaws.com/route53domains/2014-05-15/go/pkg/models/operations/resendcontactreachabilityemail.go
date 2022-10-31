package operations

import (
"openapi/pkg/models/shared")


type ResendContactReachabilityEmailXAmzTargetEnum string

const (
    ResendContactReachabilityEmailXAmzTargetEnumRoute53DomainsV20140515ResendContactReachabilityEmail ResendContactReachabilityEmailXAmzTargetEnum = "Route53Domains_v20140515.ResendContactReachabilityEmail"
)


type ResendContactReachabilityEmailHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ResendContactReachabilityEmailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ResendContactReachabilityEmailRequest struct {
    Headers ResendContactReachabilityEmailHeaders 
    Request shared.ResendContactReachabilityEmailRequest `request:"mediaType=application/json"`
    
}

type ResendContactReachabilityEmailResponse struct {
    ContentType string 
    InvalidInput *interface{} 
    OperationLimitExceeded *interface{} 
    ResendContactReachabilityEmailResponse *shared.ResendContactReachabilityEmailResponse 
    StatusCode int64 
    UnsupportedTld *interface{} 
    
}

