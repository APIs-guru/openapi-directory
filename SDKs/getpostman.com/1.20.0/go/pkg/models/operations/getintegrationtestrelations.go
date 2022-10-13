package operations

type GetIntegrationTestRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetIntegrationTestRelationsRequest struct {
	PathParams GetIntegrationTestRelationsPathParams
}

type GetIntegrationTestRelations200ApplicationJSONIntegrationtest struct {
	CollectionID *string `json:"collectionId"`
	ID           *string `json:"id"`
	Name         *string `json:"name"`
	UpdatedAt    *string `json:"updatedAt"`
}

type GetIntegrationTestRelations200ApplicationJSON struct {
	Integrationtest []GetIntegrationTestRelations200ApplicationJSONIntegrationtest `json:"integrationtest"`
}

type GetIntegrationTestRelationsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetIntegrationTestRelations200ApplicationJSONObject *GetIntegrationTestRelations200ApplicationJSON
}
