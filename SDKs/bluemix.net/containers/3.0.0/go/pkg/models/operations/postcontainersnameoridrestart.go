package operations



type PostContainersNameOrIDRestartPathParams struct {
    NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
    
}

type PostContainersNameOrIDRestartQueryParams struct {
    T *int64 `queryParam:"style=form,explode=true,name=t"`
    
}

type PostContainersNameOrIDRestartHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type PostContainersNameOrIDRestartRequest struct {
    PathParams PostContainersNameOrIDRestartPathParams 
    QueryParams PostContainersNameOrIDRestartQueryParams 
    Headers PostContainersNameOrIDRestartHeaders 
    
}

type PostContainersNameOrIDRestartResponse struct {
    ContentType string 
    StatusCode int64 
    
}

