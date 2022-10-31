package operations

import (
"openapi/pkg/models/shared")

type ListDomainsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListDomainsXAmzTargetEnum string

const (
    ListDomainsXAmzTargetEnumSageMakerListDomains ListDomainsXAmzTargetEnum = "SageMaker.ListDomains"
)


type ListDomainsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDomainsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDomainsRequest struct {
    QueryParams ListDomainsQueryParams 
    Headers ListDomainsHeaders 
    Request shared.ListDomainsRequest `request:"mediaType=application/json"`
    
}

type ListDomainsResponse struct {
    ContentType string 
    ListDomainsResponse *shared.ListDomainsResponse 
    StatusCode int64 
    
}

