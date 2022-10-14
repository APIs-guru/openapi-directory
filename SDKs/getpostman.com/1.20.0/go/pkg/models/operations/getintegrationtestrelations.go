package operations

type GetIntegrationTestRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetIntegrationTestRelationsRequest struct {
	PathParams GetIntegrationTestRelationsPathParams
}

type GetIntegrationTestRelations200ApplicationJSONIntegrationtest struct {
	CollectionID *string `json:"collectionId,omitempty"`
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	UpdatedAt    *string `json:"updatedAt,omitempty"`
}

type GetIntegrationTestRelations200ApplicationJSON struct {
	Integrationtest []GetIntegrationTestRelations200ApplicationJSONIntegrationtest `json:"integrationtest,omitempty"`
}

type GetIntegrationTestRelationsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetIntegrationTestRelations200ApplicationJSONObject *GetIntegrationTestRelations200ApplicationJSON
}
