package operations



type PutNotificationsMarkReadJSONRequestBody struct {
    ID *int64 `json:"id,omitempty"`
    
}

type PutNotificationsMarkReadJSONRequest struct {
    Request *PutNotificationsMarkReadJSONRequestBody `request:"mediaType=application/json"`
    
}

type PutNotificationsMarkReadJSON200ApplicationJSON struct {
    Success *string `json:"success,omitempty"`
    
}

type PutNotificationsMarkReadJSONResponse struct {
    ContentType string 
    PutNotificationsMarkReadJSON200ApplicationJSONObject *PutNotificationsMarkReadJSON200ApplicationJSON 
    StatusCode int64 
    
}

