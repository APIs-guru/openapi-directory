package operations

type GetContractTestRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetContractTestRelationsRequest struct {
	PathParams GetContractTestRelationsPathParams
}

type GetContractTestRelations200ApplicationJSONContracttest struct {
	CollectionID *string `json:"collectionId"`
	ID           *string `json:"id"`
	Name         *string `json:"name"`
	UpdatedAt    *string `json:"updatedAt"`
}

type GetContractTestRelations200ApplicationJSON struct {
	Contracttest []GetContractTestRelations200ApplicationJSONContracttest `json:"contracttest"`
}

type GetContractTestRelationsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetContractTestRelations200ApplicationJSONObject *GetContractTestRelations200ApplicationJSON
}
