package operations

import (
"openapi/pkg/models/shared")

type ListStreamsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListStreamsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListStreamsRequestBody struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type ListStreamsRequest struct {
    QueryParams ListStreamsQueryParams 
    Headers ListStreamsHeaders 
    Request ListStreamsRequestBody `request:"mediaType=application/json"`
    
}

type ListStreamsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    ListStreamsResponse *shared.ListStreamsResponse 
    StatusCode int64 
    
}

