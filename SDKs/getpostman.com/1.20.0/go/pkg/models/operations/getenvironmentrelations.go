package operations

type GetEnvironmentRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetEnvironmentRelationsRequest struct {
	PathParams GetEnvironmentRelationsPathParams
}

type GetEnvironmentRelations200ApplicationJSONEnvironment struct {
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	UpdatedAt *string `json:"updatedAt"`
}

type GetEnvironmentRelations200ApplicationJSON struct {
	Environment []GetEnvironmentRelations200ApplicationJSONEnvironment `json:"environment"`
}

type GetEnvironmentRelationsResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetEnvironmentRelations200ApplicationJSONObject *GetEnvironmentRelations200ApplicationJSON
}
