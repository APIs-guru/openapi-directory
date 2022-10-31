package operations



type PatchConnectorPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchConnectorRequestBody struct {
    Chargestation *string `json:"chargestation,omitempty"`
    Format *string `json:"format,omitempty"`
    Power *int64 `json:"power,omitempty"`
    PowerType *string `json:"power_type,omitempty"`
    Rate *string `json:"rate,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type PatchConnectorRequest struct {
    PathParams PatchConnectorPathParams 
    Request PatchConnectorRequestBody `request:"mediaType=application/json"`
    
}

type PatchConnector201ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    Ok *bool `json:"ok,omitempty"`
    Result map[string]interface{} `json:"result,omitempty"`
    
}

type PatchConnectorResponse struct {
    ContentType string 
    StatusCode int64 
    PatchConnector201ApplicationJSONObject *PatchConnector201ApplicationJSON 
    
}

