package operations



type ReserveRequestBody struct {
    Chargestation *string `json:"chargestation,omitempty"`
    Connector *string `json:"connector,omitempty"`
    Driver *string `json:"driver,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

type ReserveRequest struct {
    Request ReserveRequestBody `request:"mediaType=application/json"`
    
}

type Reserve201ApplicationJSON struct {
    Command map[string]interface{} `json:"command,omitempty"`
    Message *string `json:"message,omitempty"`
    Ok *bool `json:"ok,omitempty"`
    
}

type ReserveResponse struct {
    ContentType string 
    StatusCode int64 
    Reserve201ApplicationJSONObject *Reserve201ApplicationJSON 
    
}

