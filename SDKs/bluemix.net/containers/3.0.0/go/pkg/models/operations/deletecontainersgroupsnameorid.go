package operations



type DeleteContainersGroupsNameOrIDPathParams struct {
    NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
    
}

type DeleteContainersGroupsNameOrIDQueryParams struct {
    Force *string `queryParam:"style=form,explode=true,name=force"`
    
}

type DeleteContainersGroupsNameOrIDHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type DeleteContainersGroupsNameOrIDRequest struct {
    PathParams DeleteContainersGroupsNameOrIDPathParams 
    QueryParams DeleteContainersGroupsNameOrIDQueryParams 
    Headers DeleteContainersGroupsNameOrIDHeaders 
    
}

type DeleteContainersGroupsNameOrIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

