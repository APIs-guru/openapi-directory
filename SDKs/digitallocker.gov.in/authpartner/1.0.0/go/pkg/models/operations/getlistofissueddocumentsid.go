package operations



type GetListOfIssuedDocumentsID200ApplicationJSON struct {
    Items []interface{} `json:"items"`
    Resource string `json:"resource"`
    
}

type GetListOfIssuedDocumentsID401ApplicationJSON struct {
    Error *string `json:"error,omitempty"`
    ErrorDescription *string `json:"error_description,omitempty"`
    
}

type GetListOfIssuedDocumentsIDResponse struct {
    ContentType string 
    GetListOfIssuedDocumentsID200ApplicationJSONObject *GetListOfIssuedDocumentsID200ApplicationJSON 
    GetListOfIssuedDocumentsID401ApplicationJSONObject *GetListOfIssuedDocumentsID401ApplicationJSON 
    GetListOfIssuedDocumentsID500ApplicationJSONOneOf *interface{} 
    StatusCode int64 
    
}

