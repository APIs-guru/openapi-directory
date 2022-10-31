package operations



type GetGetSuggestedFollowsAllQueryParams struct {
    InOnboarding *bool `queryParam:"style=form,explode=true,name=in_onboarding"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetGetSuggestedFollowsAllRequest struct {
    QueryParams GetGetSuggestedFollowsAllQueryParams 
    
}

type GetGetSuggestedFollowsAllResponse struct {
    ContentType string 
    StatusCode int64 
    
}

