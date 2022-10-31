package operations



type PostContainersNameOrIDRenamePathParams struct {
    NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
    
}

type PostContainersNameOrIDRenameQueryParams struct {
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type PostContainersNameOrIDRenameHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type PostContainersNameOrIDRenameRequest struct {
    PathParams PostContainersNameOrIDRenamePathParams 
    QueryParams PostContainersNameOrIDRenameQueryParams 
    Headers PostContainersNameOrIDRenameHeaders 
    
}

type PostContainersNameOrIDRenameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

