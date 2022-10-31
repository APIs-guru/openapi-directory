package operations

import (
"openapi/pkg/models/shared")


type UpdateTagsForDomainXAmzTargetEnum string

const (
    UpdateTagsForDomainXAmzTargetEnumRoute53DomainsV20140515UpdateTagsForDomain UpdateTagsForDomainXAmzTargetEnum = "Route53Domains_v20140515.UpdateTagsForDomain"
)


type UpdateTagsForDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateTagsForDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateTagsForDomainRequest struct {
    Headers UpdateTagsForDomainHeaders 
    Request shared.UpdateTagsForDomainRequest `request:"mediaType=application/json"`
    
}

type UpdateTagsForDomainResponse struct {
    ContentType string 
    InvalidInput *interface{} 
    OperationLimitExceeded *interface{} 
    StatusCode int64 
    UnsupportedTld *interface{} 
    UpdateTagsForDomainResponse map[string]interface{} 
    
}

