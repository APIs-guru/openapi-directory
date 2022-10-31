package operations



type PostAdminUsersIDLogOutJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostAdminUsersIDLogOutJSONRequest struct {
    PathParams PostAdminUsersIDLogOutJSONPathParams 
    
}

type PostAdminUsersIDLogOutJSONResponse struct {
    ContentType string 
    PostAdminUsersIDLogOutJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

