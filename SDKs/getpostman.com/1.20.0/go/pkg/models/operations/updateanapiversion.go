package operations

type UpdateAnAPIVersionPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type UpdateAnAPIVersionRequestBodyVersion struct {
	Name *string `json:"name,omitempty"`
}

type UpdateAnAPIVersionRequestBody struct {
	Version *UpdateAnAPIVersionRequestBodyVersion `json:"version,omitempty"`
}

type UpdateAnAPIVersion200ApplicationJSONVersion struct {
	API       *string `json:"api,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
}

type UpdateAnAPIVersion200ApplicationJSON struct {
	Version *UpdateAnAPIVersion200ApplicationJSONVersion `json:"version,omitempty"`
}

type UpdateAnAPIVersionRequest struct {
	PathParams UpdateAnAPIVersionPathParams
	Request    *UpdateAnAPIVersionRequestBody `request:"mediaType=application/json"`
}

type UpdateAnAPIVersionResponse struct {
	ContentType                                string
	StatusCode                                 int64
	UpdateAnAPIVersion200ApplicationJSONObject *UpdateAnAPIVersion200ApplicationJSON
}
