package operations

import (
"openapi/pkg/models/shared")

type ListTrackerConsumersPathParams struct {
    TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
    
}

type ListTrackerConsumersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListTrackerConsumersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTrackerConsumersRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListTrackerConsumersRequest struct {
    PathParams ListTrackerConsumersPathParams 
    QueryParams ListTrackerConsumersQueryParams 
    Headers ListTrackerConsumersHeaders 
    Request ListTrackerConsumersRequestBody `request:"mediaType=application/json"`
    
}

type ListTrackerConsumersResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListTrackerConsumersResponse *shared.ListTrackerConsumersResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

