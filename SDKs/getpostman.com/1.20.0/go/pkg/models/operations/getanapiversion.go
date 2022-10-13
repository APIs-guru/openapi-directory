package operations

type GetAnAPIVersionPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetAnAPIVersionRequest struct {
	PathParams GetAnAPIVersionPathParams
}

type GetAnAPIVersion200ApplicationJSONVersion struct {
	API       *string  `json:"api"`
	CreatedAt *string  `json:"createdAt"`
	CreatedBy *string  `json:"createdBy"`
	ID        *string  `json:"id"`
	Name      *string  `json:"name"`
	Schema    []string `json:"schema"`
	UpdatedAt *string  `json:"updatedAt"`
	UpdatedBy *string  `json:"updatedBy"`
}

type GetAnAPIVersion200ApplicationJSON struct {
	Version *GetAnAPIVersion200ApplicationJSONVersion `json:"version"`
}

type GetAnAPIVersionResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetAnAPIVersion200ApplicationJSONObject *GetAnAPIVersion200ApplicationJSON
}
