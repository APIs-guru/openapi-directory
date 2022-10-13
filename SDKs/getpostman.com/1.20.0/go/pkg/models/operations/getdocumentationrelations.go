package operations

type GetDocumentationRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetDocumentationRelationsRequest struct {
	PathParams GetDocumentationRelationsPathParams
}

type GetDocumentationRelations200ApplicationJSONDocumentation struct {
	CollectionID *string `json:"collectionId"`
	ID           *string `json:"id"`
	Name         *string `json:"name"`
	UpdatedAt    *string `json:"updatedAt"`
}

type GetDocumentationRelations200ApplicationJSON struct {
	Documentation []GetDocumentationRelations200ApplicationJSONDocumentation `json:"documentation"`
}

type GetDocumentationRelationsResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetDocumentationRelations200ApplicationJSONObject *GetDocumentationRelations200ApplicationJSON
}
