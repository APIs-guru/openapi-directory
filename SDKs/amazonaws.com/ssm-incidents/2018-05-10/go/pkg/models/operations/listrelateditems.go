package operations

import (
"openapi/pkg/models/shared")

type ListRelatedItemsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListRelatedItemsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListRelatedItemsRequestBody struct {
    IncidentRecordArn string `json:"incidentRecordArn"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type ListRelatedItemsRequest struct {
    QueryParams ListRelatedItemsQueryParams 
    Headers ListRelatedItemsHeaders 
    Request ListRelatedItemsRequestBody `request:"mediaType=application/json"`
    
}

type ListRelatedItemsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListRelatedItemsOutput *shared.ListRelatedItemsOutput 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

