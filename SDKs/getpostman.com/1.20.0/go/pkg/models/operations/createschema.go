package operations

type CreateSchemaPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type CreateSchemaRequestBodySchema struct {
	Language *string `json:"language"`
	Schema   *string `json:"schema"`
	Type     *string `json:"type"`
}

type CreateSchemaRequestBody struct {
	Schema *CreateSchemaRequestBodySchema `json:"schema"`
}

type CreateSchemaRequest struct {
	PathParams CreateSchemaPathParams
	Request    *CreateSchemaRequestBody `request:"mediaType=application/json"`
}

type CreateSchema200ApplicationJSONSchema struct {
	APIVersion *string `json:"apiVersion"`
	CreatedAt  *string `json:"createdAt"`
	CreatedBy  *string `json:"createdBy"`
	ID         *string `json:"id"`
	Language   *string `json:"language"`
	Type       *string `json:"type"`
	UpdateBy   *string `json:"updateBy"`
	UpdatedAt  *string `json:"updatedAt"`
}

type CreateSchema200ApplicationJSON struct {
	Schema *CreateSchema200ApplicationJSONSchema `json:"schema"`
}

type CreateSchemaResponse struct {
	ContentType                          string
	StatusCode                           int64
	CreateSchema200ApplicationJSONObject *CreateSchema200ApplicationJSON
}
