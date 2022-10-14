package operations

type CreateSchemaPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type CreateSchemaRequestBodySchema struct {
	Language *string `json:"language,omitempty"`
	Schema   *string `json:"schema,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type CreateSchemaRequestBody struct {
	Schema *CreateSchemaRequestBodySchema `json:"schema,omitempty"`
}

type CreateSchemaRequest struct {
	PathParams CreateSchemaPathParams
	Request    *CreateSchemaRequestBody `request:"mediaType=application/json"`
}

type CreateSchema200ApplicationJSONSchema struct {
	APIVersion *string `json:"apiVersion,omitempty"`
	CreatedAt  *string `json:"createdAt,omitempty"`
	CreatedBy  *string `json:"createdBy,omitempty"`
	ID         *string `json:"id,omitempty"`
	Language   *string `json:"language,omitempty"`
	Type       *string `json:"type,omitempty"`
	UpdateBy   *string `json:"updateBy,omitempty"`
	UpdatedAt  *string `json:"updatedAt,omitempty"`
}

type CreateSchema200ApplicationJSON struct {
	Schema *CreateSchema200ApplicationJSONSchema `json:"schema,omitempty"`
}

type CreateSchemaResponse struct {
	ContentType                          string
	StatusCode                           int64
	CreateSchema200ApplicationJSONObject *CreateSchema200ApplicationJSON
}
