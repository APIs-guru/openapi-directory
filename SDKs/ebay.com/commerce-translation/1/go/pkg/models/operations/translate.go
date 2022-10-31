package operations

import (
"openapi/pkg/models/shared")

type TranslateSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type TranslateRequest struct {
    Request shared.TranslateRequest `request:"mediaType=application/json"`
    Security TranslateSecurity 
    
}

type Translate400ApplicationJSON struct {
    Errors []shared.Error `json:"errors,omitempty"`
    
}

type Translate500ApplicationJSON struct {
    Errors []shared.Error `json:"errors,omitempty"`
    
}

type TranslateResponse struct {
    ContentType string 
    StatusCode int64 
    TranslateResponse *shared.TranslateResponse 
    Translate400ApplicationJSONObject *Translate400ApplicationJSON 
    Translate500ApplicationJSONObject *Translate500ApplicationJSON 
    
}

