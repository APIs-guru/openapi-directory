package operations

import (
"openapi/pkg/models/shared")


type DisableDomainTransferLockXAmzTargetEnum string

const (
    DisableDomainTransferLockXAmzTargetEnumRoute53DomainsV20140515DisableDomainTransferLock DisableDomainTransferLockXAmzTargetEnum = "Route53Domains_v20140515.DisableDomainTransferLock"
)


type DisableDomainTransferLockHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableDomainTransferLockXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableDomainTransferLockRequest struct {
    Headers DisableDomainTransferLockHeaders 
    Request shared.DisableDomainTransferLockRequest `request:"mediaType=application/json"`
    
}

type DisableDomainTransferLockResponse struct {
    ContentType string 
    DisableDomainTransferLockResponse *shared.DisableDomainTransferLockResponse 
    DuplicateRequest *interface{} 
    InvalidInput *interface{} 
    OperationLimitExceeded *interface{} 
    StatusCode int64 
    TldRulesViolation *interface{} 
    UnsupportedTld *interface{} 
    
}

