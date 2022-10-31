package operations



type CreateEnvironmentRequestBodyEnvironmentValues struct {
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type CreateEnvironmentRequestBodyEnvironment struct {
    Name *string `json:"name,omitempty"`
    Values []CreateEnvironmentRequestBodyEnvironmentValues `json:"values,omitempty"`
    
}

type CreateEnvironmentRequestBody struct {
    Environment *CreateEnvironmentRequestBodyEnvironment `json:"environment,omitempty"`
    
}

type CreateEnvironmentRequest struct {
    Request *CreateEnvironmentRequestBody `request:"mediaType=application/json"`
    
}

type CreateEnvironment200ApplicationJSONEnvironment struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type CreateEnvironment200ApplicationJSON struct {
    Environment *CreateEnvironment200ApplicationJSONEnvironment `json:"environment,omitempty"`
    
}

type CreateEnvironment400ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type CreateEnvironment400ApplicationJSON struct {
    Error *CreateEnvironment400ApplicationJSONError `json:"error,omitempty"`
    
}

type CreateEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    CreateEnvironment200ApplicationJSONObject *CreateEnvironment200ApplicationJSON 
    CreateEnvironment400ApplicationJSONObject *CreateEnvironment400ApplicationJSON 
    
}

