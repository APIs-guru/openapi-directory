package operations



type GetContainersMessagesHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type GetContainersMessagesRequest struct {
    Headers GetContainersMessagesHeaders 
    
}

type GetContainersMessages200ApplicationJSON struct {
    CreatedDate *string `json:"created_date,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetContainersMessagesResponse struct {
    ContentType string 
    GetContainersMessages200ApplicationJSONObject *GetContainersMessages200ApplicationJSON 
    StatusCode int64 
    
}

