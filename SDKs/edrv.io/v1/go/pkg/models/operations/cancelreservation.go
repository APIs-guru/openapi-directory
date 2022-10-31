package operations



type CancelreservationRequestBody struct {
    Reservation *string `json:"reservation,omitempty"`
    
}

type CancelreservationRequest struct {
    Request CancelreservationRequestBody `request:"mediaType=application/json"`
    
}

type Cancelreservation201ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    Ok *bool `json:"ok,omitempty"`
    Result map[string]interface{} `json:"result,omitempty"`
    
}

type CancelreservationResponse struct {
    ContentType string 
    StatusCode int64 
    Cancelreservation201ApplicationJSONObject *Cancelreservation201ApplicationJSON 
    
}

