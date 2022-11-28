package operations

type GetSchemaPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
	SchemaID     string `pathParam:"style=simple,explode=false,name=schemaId"`
}

type GetSchema200ApplicationJSONSchema struct {
	APIVersion *string `json:"apiVersion,omitempty"`
	CreatedAt  *string `json:"createdAt,omitempty"`
	CreatedBy  *string `json:"createdBy,omitempty"`
	ID         *string `json:"id,omitempty"`
	Language   *string `json:"language,omitempty"`
	Type       *string `json:"type,omitempty"`
	UpdateBy   *string `json:"updateBy,omitempty"`
	UpdatedAt  *string `json:"updatedAt,omitempty"`
}

type GetSchema200ApplicationJSON struct {
	Schema *GetSchema200ApplicationJSONSchema `json:"schema,omitempty"`
}

type GetSchemaRequest struct {
	PathParams GetSchemaPathParams
}

type GetSchemaResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetSchema200ApplicationJSONObject *GetSchema200ApplicationJSON
}
