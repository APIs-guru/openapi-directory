package operations

import (
"openapi/pkg/models/shared")


type GetContactReachabilityStatusXAmzTargetEnum string

const (
    GetContactReachabilityStatusXAmzTargetEnumRoute53DomainsV20140515GetContactReachabilityStatus GetContactReachabilityStatusXAmzTargetEnum = "Route53Domains_v20140515.GetContactReachabilityStatus"
)


type GetContactReachabilityStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetContactReachabilityStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetContactReachabilityStatusRequest struct {
    Headers GetContactReachabilityStatusHeaders 
    Request shared.GetContactReachabilityStatusRequest `request:"mediaType=application/json"`
    
}

type GetContactReachabilityStatusResponse struct {
    ContentType string 
    GetContactReachabilityStatusResponse *shared.GetContactReachabilityStatusResponse 
    InvalidInput *interface{} 
    OperationLimitExceeded *interface{} 
    StatusCode int64 
    UnsupportedTld *interface{} 
    
}

