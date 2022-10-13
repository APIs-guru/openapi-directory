package operations

type CreateCollectionFromSchemaPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
	SchemaID     string `pathParam:"style=simple,explode=false,name=schemaId"`
}

type CreateCollectionFromSchemaQueryParams struct {
	Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
}

type CreateCollectionFromSchemaRequestBodyRelations struct {
	Type *string `json:"type"`
}

type CreateCollectionFromSchemaRequestBody struct {
	Name      *string                                          `json:"name"`
	Relations []CreateCollectionFromSchemaRequestBodyRelations `json:"relations"`
}

type CreateCollectionFromSchemaRequest struct {
	PathParams  CreateCollectionFromSchemaPathParams
	QueryParams CreateCollectionFromSchemaQueryParams
	Request     *CreateCollectionFromSchemaRequestBody `request:"mediaType=application/json"`
}

type CreateCollectionFromSchema200ApplicationJSONCollection struct {
	ID  *string `json:"id"`
	UID *string `json:"uid"`
}

type CreateCollectionFromSchema200ApplicationJSONRelations struct {
	ID   *string `json:"id"`
	Type *string `json:"type"`
}

type CreateCollectionFromSchema200ApplicationJSON struct {
	Collection *CreateCollectionFromSchema200ApplicationJSONCollection `json:"collection"`
	Relations  []CreateCollectionFromSchema200ApplicationJSONRelations `json:"relations"`
}

type CreateCollectionFromSchemaResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	CreateCollectionFromSchema200ApplicationJSONObject *CreateCollectionFromSchema200ApplicationJSON
}
