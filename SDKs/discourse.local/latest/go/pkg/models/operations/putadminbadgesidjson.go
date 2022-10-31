package operations



type PutAdminBadgesIDJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutAdminBadgesIDJSONRequest struct {
    PathParams PutAdminBadgesIDJSONPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PutAdminBadgesIDJSONResponse struct {
    ContentType string 
    PutAdminBadgesIDJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

