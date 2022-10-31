package operations



type AccessSetAcldbPathParams struct {
    DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
    
}

type AccessSetAcldbRequest struct {
    PathParams AccessSetAcldbPathParams 
    
}

type AccessSetAcldbResponse struct {
    ContentType string 
    StatusCode int64 
    AccessSetAcldb200ApplicationJSONString *string 
    
}

