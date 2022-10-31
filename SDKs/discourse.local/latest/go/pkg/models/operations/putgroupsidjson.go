package operations



type PutGroupsIDJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutGroupsIDJSONRequestBodyGroup struct {
    Name string `json:"name"`
    
}

type PutGroupsIDJSONRequestBody struct {
    Group PutGroupsIDJSONRequestBodyGroup `json:"group"`
    
}

type PutGroupsIDJSONRequest struct {
    PathParams PutGroupsIDJSONPathParams 
    Request *PutGroupsIDJSONRequestBody `request:"mediaType=application/json"`
    
}

type PutGroupsIDJSON200ApplicationJSON struct {
    Success *string `json:"success,omitempty"`
    
}

type PutGroupsIDJSONResponse struct {
    ContentType string 
    PutGroupsIDJSON200ApplicationJSONObject *PutGroupsIDJSON200ApplicationJSON 
    StatusCode int64 
    
}

