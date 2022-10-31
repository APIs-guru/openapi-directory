package operations

import (
"openapi/pkg/models/shared")

type ListAliasesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAliasesXAmzTargetEnum string

const (
    ListAliasesXAmzTargetEnumWorkMailServiceListAliases ListAliasesXAmzTargetEnum = "WorkMailService.ListAliases"
)


type ListAliasesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAliasesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAliasesRequest struct {
    QueryParams ListAliasesQueryParams 
    Headers ListAliasesHeaders 
    Request shared.ListAliasesRequest `request:"mediaType=application/json"`
    
}

type ListAliasesResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    EntityStateException *interface{} 
    InvalidParameterException *interface{} 
    ListAliasesResponse *shared.ListAliasesResponse 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

