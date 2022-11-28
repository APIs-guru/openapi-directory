package operations

type GetAnAPIVersionPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetAnAPIVersion200ApplicationJSONVersion struct {
	API       *string  `json:"api,omitempty"`
	CreatedAt *string  `json:"createdAt,omitempty"`
	CreatedBy *string  `json:"createdBy,omitempty"`
	ID        *string  `json:"id,omitempty"`
	Name      *string  `json:"name,omitempty"`
	Schema    []string `json:"schema,omitempty"`
	UpdatedAt *string  `json:"updatedAt,omitempty"`
	UpdatedBy *string  `json:"updatedBy,omitempty"`
}

type GetAnAPIVersion200ApplicationJSON struct {
	Version *GetAnAPIVersion200ApplicationJSONVersion `json:"version,omitempty"`
}

type GetAnAPIVersionRequest struct {
	PathParams GetAnAPIVersionPathParams
}

type GetAnAPIVersionResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetAnAPIVersion200ApplicationJSONObject *GetAnAPIVersion200ApplicationJSON
}
