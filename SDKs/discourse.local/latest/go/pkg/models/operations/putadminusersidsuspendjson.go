package operations



type PutAdminUsersIDSuspendJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutAdminUsersIDSuspendJSONRequest struct {
    PathParams PutAdminUsersIDSuspendJSONPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PutAdminUsersIDSuspendJSONResponse struct {
    ContentType string 
    PutAdminUsersIDSuspendJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

