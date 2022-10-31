package operations



type UpdateSchemaPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
    SchemaID string `pathParam:"style=simple,explode=false,name=schemaId"`
    
}

type UpdateSchemaRequestBodySchema struct {
    Language *string `json:"language,omitempty"`
    Schema *string `json:"schema,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type UpdateSchemaRequestBody struct {
    Schema *UpdateSchemaRequestBodySchema `json:"schema,omitempty"`
    
}

type UpdateSchemaRequest struct {
    PathParams UpdateSchemaPathParams 
    Request *UpdateSchemaRequestBody `request:"mediaType=application/json"`
    
}

type UpdateSchema200ApplicationJSONSchema struct {
    APIVersion *string `json:"apiVersion,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    ID *string `json:"id,omitempty"`
    Language *string `json:"language,omitempty"`
    Type *string `json:"type,omitempty"`
    UpdateBy *string `json:"updateBy,omitempty"`
    UpdatedAt *string `json:"updatedAt,omitempty"`
    
}

type UpdateSchema200ApplicationJSON struct {
    Schema *UpdateSchema200ApplicationJSONSchema `json:"schema,omitempty"`
    
}

type UpdateSchemaResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateSchema200ApplicationJSONObject *UpdateSchema200ApplicationJSON 
    
}

