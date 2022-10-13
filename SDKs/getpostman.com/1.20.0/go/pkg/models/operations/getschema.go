package operations

type GetSchemaPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
	SchemaID     string `pathParam:"style=simple,explode=false,name=schemaId"`
}

type GetSchemaRequest struct {
	PathParams GetSchemaPathParams
}

type GetSchema200ApplicationJSONSchema struct {
	APIVersion *string `json:"apiVersion"`
	CreatedAt  *string `json:"createdAt"`
	CreatedBy  *string `json:"createdBy"`
	ID         *string `json:"id"`
	Language   *string `json:"language"`
	Type       *string `json:"type"`
	UpdateBy   *string `json:"updateBy"`
	UpdatedAt  *string `json:"updatedAt"`
}

type GetSchema200ApplicationJSON struct {
	Schema *GetSchema200ApplicationJSONSchema `json:"schema"`
}

type GetSchemaResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetSchema200ApplicationJSONObject *GetSchema200ApplicationJSON
}
