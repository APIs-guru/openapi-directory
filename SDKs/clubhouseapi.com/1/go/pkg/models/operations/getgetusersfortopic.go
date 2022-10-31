package operations



type GetGetUsersForTopicQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    TopicID *int64 `queryParam:"style=form,explode=true,name=topic_id"`
    
}

type GetGetUsersForTopicRequest struct {
    QueryParams GetGetUsersForTopicQueryParams 
    
}

type GetGetUsersForTopicResponse struct {
    ContentType string 
    StatusCode int64 
    
}

