package operations

import (
"openapi/pkg/models/shared")


type CheckDomainTransferabilityXAmzTargetEnum string

const (
    CheckDomainTransferabilityXAmzTargetEnumRoute53DomainsV20140515CheckDomainTransferability CheckDomainTransferabilityXAmzTargetEnum = "Route53Domains_v20140515.CheckDomainTransferability"
)


type CheckDomainTransferabilityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CheckDomainTransferabilityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CheckDomainTransferabilityRequest struct {
    Headers CheckDomainTransferabilityHeaders 
    Request shared.CheckDomainTransferabilityRequest `request:"mediaType=application/json"`
    
}

type CheckDomainTransferabilityResponse struct {
    CheckDomainTransferabilityResponse *shared.CheckDomainTransferabilityResponse 
    ContentType string 
    InvalidInput *interface{} 
    StatusCode int64 
    UnsupportedTld *interface{} 
    
}

