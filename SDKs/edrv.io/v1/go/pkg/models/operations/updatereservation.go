package operations



type UpdatereservationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdatereservationRequestBody struct {
    Connector *int64 `json:"connector,omitempty"`
    Driver *string `json:"driver,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    Evse *int64 `json:"evse,omitempty"`
    
}

type UpdatereservationRequest struct {
    PathParams UpdatereservationPathParams 
    Request UpdatereservationRequestBody `request:"mediaType=application/json"`
    
}

type Updatereservation201ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    Ok *bool `json:"ok,omitempty"`
    Result map[string]interface{} `json:"result,omitempty"`
    
}

type UpdatereservationResponse struct {
    ContentType string 
    StatusCode int64 
    Updatereservation201ApplicationJSONObject *Updatereservation201ApplicationJSON 
    
}

