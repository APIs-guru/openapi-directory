package operations

import (
"openapi/pkg/models/shared")


type CheckDomainAvailabilityXAmzTargetEnum string

const (
    CheckDomainAvailabilityXAmzTargetEnumRoute53DomainsV20140515CheckDomainAvailability CheckDomainAvailabilityXAmzTargetEnum = "Route53Domains_v20140515.CheckDomainAvailability"
)


type CheckDomainAvailabilityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CheckDomainAvailabilityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CheckDomainAvailabilityRequest struct {
    Headers CheckDomainAvailabilityHeaders 
    Request shared.CheckDomainAvailabilityRequest `request:"mediaType=application/json"`
    
}

type CheckDomainAvailabilityResponse struct {
    CheckDomainAvailabilityResponse *shared.CheckDomainAvailabilityResponse 
    ContentType string 
    InvalidInput *interface{} 
    StatusCode int64 
    UnsupportedTld *interface{} 
    
}

