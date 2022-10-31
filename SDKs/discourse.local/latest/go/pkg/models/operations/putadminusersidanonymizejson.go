package operations



type PutAdminUsersIDAnonymizeJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutAdminUsersIDAnonymizeJSONRequest struct {
    PathParams PutAdminUsersIDAnonymizeJSONPathParams 
    
}

type PutAdminUsersIDAnonymizeJSONResponse struct {
    ContentType string 
    PutAdminUsersIDAnonymizeJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

