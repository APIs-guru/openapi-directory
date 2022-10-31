package operations



type UpdateEnvironmentPathParams struct {
    EnvironmentUID string `pathParam:"style=simple,explode=false,name=environment_uid"`
    
}

type UpdateEnvironmentRequestBodyEnvironmentValues struct {
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type UpdateEnvironmentRequestBodyEnvironment struct {
    Name *string `json:"name,omitempty"`
    Values []UpdateEnvironmentRequestBodyEnvironmentValues `json:"values,omitempty"`
    
}

type UpdateEnvironmentRequestBody struct {
    Environment *UpdateEnvironmentRequestBodyEnvironment `json:"environment,omitempty"`
    
}

type UpdateEnvironmentRequest struct {
    PathParams UpdateEnvironmentPathParams 
    Request *UpdateEnvironmentRequestBody `request:"mediaType=application/json"`
    
}

type UpdateEnvironment200ApplicationJSONEnvironment struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type UpdateEnvironment200ApplicationJSON struct {
    Environment *UpdateEnvironment200ApplicationJSONEnvironment `json:"environment,omitempty"`
    
}

type UpdateEnvironment400ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateEnvironment400ApplicationJSON struct {
    Error *UpdateEnvironment400ApplicationJSONError `json:"error,omitempty"`
    
}

type UpdateEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateEnvironment200ApplicationJSONObject *UpdateEnvironment200ApplicationJSON 
    UpdateEnvironment400ApplicationJSONObject *UpdateEnvironment400ApplicationJSON 
    
}

