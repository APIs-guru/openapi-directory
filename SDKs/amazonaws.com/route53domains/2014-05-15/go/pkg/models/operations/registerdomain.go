package operations

import (
"openapi/pkg/models/shared")


type RegisterDomainXAmzTargetEnum string

const (
    RegisterDomainXAmzTargetEnumRoute53DomainsV20140515RegisterDomain RegisterDomainXAmzTargetEnum = "Route53Domains_v20140515.RegisterDomain"
)


type RegisterDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterDomainRequest struct {
    Headers RegisterDomainHeaders 
    Request shared.RegisterDomainRequest `request:"mediaType=application/json"`
    
}

type RegisterDomainResponse struct {
    ContentType string 
    DomainLimitExceeded *interface{} 
    DuplicateRequest *interface{} 
    InvalidInput *interface{} 
    OperationLimitExceeded *interface{} 
    RegisterDomainResponse *shared.RegisterDomainResponse 
    StatusCode int64 
    TldRulesViolation *interface{} 
    UnsupportedTld *interface{} 
    
}

