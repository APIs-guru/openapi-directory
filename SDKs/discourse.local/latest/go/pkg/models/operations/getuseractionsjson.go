package operations



type GetUserActionsJSONQueryParams struct {
    Filter string `queryParam:"style=form,explode=true,name=filter"`
    Offset int64 `queryParam:"style=form,explode=true,name=offset"`
    Username string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetUserActionsJSONRequest struct {
    QueryParams GetUserActionsJSONQueryParams 
    
}

type GetUserActionsJSONResponse struct {
    ContentType string 
    GetUserActionsJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

