package operations



type DeletechargingscheduleRequestBody struct {
    ID *string `json:"id,omitempty"`
    
}

type DeletechargingscheduleRequest struct {
    Request DeletechargingscheduleRequestBody `request:"mediaType=application/json"`
    
}

type Deletechargingschedule201ApplicationJSON struct {
    Command map[string]interface{} `json:"command,omitempty"`
    Message *string `json:"message,omitempty"`
    Ok *bool `json:"ok,omitempty"`
    
}

type DeletechargingscheduleResponse struct {
    ContentType string 
    StatusCode int64 
    Deletechargingschedule201ApplicationJSONObject *Deletechargingschedule201ApplicationJSON 
    
}

