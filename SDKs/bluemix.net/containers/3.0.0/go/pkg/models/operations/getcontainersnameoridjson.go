package operations



type GetContainersNameOrIDJSONPathParams struct {
    NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
    
}

type GetContainersNameOrIDJSONHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type GetContainersNameOrIDJSONRequest struct {
    PathParams GetContainersNameOrIDJSONPathParams 
    Headers GetContainersNameOrIDJSONHeaders 
    
}

type GetContainersNameOrIDJSONResponse struct {
    ContainerInfo *interface{} 
    ContentType string 
    StatusCode int64 
    
}

