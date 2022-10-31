package operations



type SingleEnvironmentPathParams struct {
    EnvironmentUID string `pathParam:"style=simple,explode=false,name=environment_uid"`
    
}

type SingleEnvironmentRequest struct {
    PathParams SingleEnvironmentPathParams 
    
}

type SingleEnvironment200ApplicationJSONEnvironmentValues struct {
    Enabled *bool `json:"enabled,omitempty"`
    Hovered *bool `json:"hovered,omitempty"`
    Key *string `json:"key,omitempty"`
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type SingleEnvironment200ApplicationJSONEnvironment struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Values []SingleEnvironment200ApplicationJSONEnvironmentValues `json:"values,omitempty"`
    
}

type SingleEnvironment200ApplicationJSON struct {
    Environment *SingleEnvironment200ApplicationJSONEnvironment `json:"environment,omitempty"`
    
}

type SingleEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    SingleEnvironment200ApplicationJSONObject *SingleEnvironment200ApplicationJSON 
    
}

