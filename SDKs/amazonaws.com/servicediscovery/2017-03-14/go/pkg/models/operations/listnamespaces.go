package operations

import (
"openapi/pkg/models/shared")

type ListNamespacesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListNamespacesXAmzTargetEnum string

const (
    ListNamespacesXAmzTargetEnumRoute53AutoNamingV20170314ListNamespaces ListNamespacesXAmzTargetEnum = "Route53AutoNaming_v20170314.ListNamespaces"
)


type ListNamespacesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListNamespacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListNamespacesRequest struct {
    QueryParams ListNamespacesQueryParams 
    Headers ListNamespacesHeaders 
    Request shared.ListNamespacesRequest `request:"mediaType=application/json"`
    
}

type ListNamespacesResponse struct {
    ContentType string 
    InvalidInput *interface{} 
    ListNamespacesResponse *shared.ListNamespacesResponse 
    StatusCode int64 
    
}

