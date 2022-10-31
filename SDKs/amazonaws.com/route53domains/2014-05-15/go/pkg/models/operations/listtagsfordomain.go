package operations

import (
"openapi/pkg/models/shared")


type ListTagsForDomainXAmzTargetEnum string

const (
    ListTagsForDomainXAmzTargetEnumRoute53DomainsV20140515ListTagsForDomain ListTagsForDomainXAmzTargetEnum = "Route53Domains_v20140515.ListTagsForDomain"
)


type ListTagsForDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTagsForDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTagsForDomainRequest struct {
    Headers ListTagsForDomainHeaders 
    Request shared.ListTagsForDomainRequest `request:"mediaType=application/json"`
    
}

type ListTagsForDomainResponse struct {
    ContentType string 
    InvalidInput *interface{} 
    ListTagsForDomainResponse *shared.ListTagsForDomainResponse 
    OperationLimitExceeded *interface{} 
    StatusCode int64 
    UnsupportedTld *interface{} 
    
}

