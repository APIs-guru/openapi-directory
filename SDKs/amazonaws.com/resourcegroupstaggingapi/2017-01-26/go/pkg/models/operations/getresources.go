package operations

import (
"openapi/pkg/models/shared")

type GetResourcesQueryParams struct {
    PaginationToken *string `queryParam:"style=form,explode=true,name=PaginationToken"`
    ResourcesPerPage *string `queryParam:"style=form,explode=true,name=ResourcesPerPage"`
    
}


type GetResourcesXAmzTargetEnum string

const (
    GetResourcesXAmzTargetEnumResourceGroupsTaggingApi20170126GetResources GetResourcesXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.GetResources"
)


type GetResourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetResourcesRequest struct {
    QueryParams GetResourcesQueryParams 
    Headers GetResourcesHeaders 
    Request shared.GetResourcesInput `request:"mediaType=application/json"`
    
}

type GetResourcesResponse struct {
    ContentType string 
    GetResourcesOutput *shared.GetResourcesOutput 
    InternalServiceException *interface{} 
    InvalidParameterException *interface{} 
    PaginationTokenExpiredException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

