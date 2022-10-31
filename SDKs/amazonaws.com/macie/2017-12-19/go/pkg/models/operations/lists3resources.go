package operations

import (
"openapi/pkg/models/shared")

type ListS3ResourcesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListS3ResourcesXAmzTargetEnum string

const (
    ListS3ResourcesXAmzTargetEnumMacieServiceListS3Resources ListS3ResourcesXAmzTargetEnum = "MacieService.ListS3Resources"
)


type ListS3ResourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListS3ResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListS3ResourcesRequest struct {
    QueryParams ListS3ResourcesQueryParams 
    Headers ListS3ResourcesHeaders 
    Request shared.ListS3ResourcesRequest `request:"mediaType=application/json"`
    
}

type ListS3ResourcesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    ListS3ResourcesResult *shared.ListS3ResourcesResult 
    StatusCode int64 
    
}

