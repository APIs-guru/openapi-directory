package operations

type GetDocumentationRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetDocumentationRelations200ApplicationJSONDocumentation struct {
	CollectionID *string `json:"collectionId,omitempty"`
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	UpdatedAt    *string `json:"updatedAt,omitempty"`
}

type GetDocumentationRelations200ApplicationJSON struct {
	Documentation []GetDocumentationRelations200ApplicationJSONDocumentation `json:"documentation,omitempty"`
}

type GetDocumentationRelationsRequest struct {
	PathParams GetDocumentationRelationsPathParams
}

type GetDocumentationRelationsResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetDocumentationRelations200ApplicationJSONObject *GetDocumentationRelations200ApplicationJSON
}
