package operations



type CreateAPIVersionPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}

type CreateAPIVersionRequestBodyVersionSourceRelations struct {
    Documentation *bool `json:"documentation,omitempty"`
    Mock *bool `json:"mock,omitempty"`
    Monitor *bool `json:"monitor,omitempty"`
    
}

type CreateAPIVersionRequestBodyVersionSource struct {
    ID *string `json:"id,omitempty"`
    Relations *CreateAPIVersionRequestBodyVersionSourceRelations `json:"relations,omitempty"`
    Schema *bool `json:"schema,omitempty"`
    
}

type CreateAPIVersionRequestBodyVersion struct {
    Name *string `json:"name,omitempty"`
    Source *CreateAPIVersionRequestBodyVersionSource `json:"source,omitempty"`
    
}

type CreateAPIVersionRequestBody struct {
    Version *CreateAPIVersionRequestBodyVersion `json:"version,omitempty"`
    
}

type CreateAPIVersionRequest struct {
    PathParams CreateAPIVersionPathParams 
    Request *CreateAPIVersionRequestBody `request:"mediaType=application/json"`
    
}

type CreateAPIVersion200ApplicationJSONVersion struct {
    API *string `json:"api,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type CreateAPIVersion200ApplicationJSON struct {
    Version *CreateAPIVersion200ApplicationJSONVersion `json:"version,omitempty"`
    
}

type CreateAPIVersionResponse struct {
    ContentType string 
    StatusCode int64 
    CreateAPIVersion200ApplicationJSONObject *CreateAPIVersion200ApplicationJSON 
    
}

