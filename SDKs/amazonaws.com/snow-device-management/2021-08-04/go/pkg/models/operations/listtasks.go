package operations

import (
"openapi/pkg/models/shared")


type ListTasksStateEnum string

const (
    ListTasksStateEnumInProgress ListTasksStateEnum = "IN_PROGRESS"
ListTasksStateEnumCanceled ListTasksStateEnum = "CANCELED"
ListTasksStateEnumCompleted ListTasksStateEnum = "COMPLETED"
)


type ListTasksQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    State *ListTasksStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type ListTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTasksRequest struct {
    QueryParams ListTasksQueryParams 
    Headers ListTasksHeaders 
    
}

type ListTasksResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListTasksOutput *shared.ListTasksOutput 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

