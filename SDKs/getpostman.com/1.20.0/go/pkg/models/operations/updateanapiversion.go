package operations

type UpdateAnAPIVersionPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type UpdateAnAPIVersionRequestBodyVersion struct {
	Name *string `json:"name"`
}

type UpdateAnAPIVersionRequestBody struct {
	Version *UpdateAnAPIVersionRequestBodyVersion `json:"version"`
}

type UpdateAnAPIVersionRequest struct {
	PathParams UpdateAnAPIVersionPathParams
	Request    *UpdateAnAPIVersionRequestBody `request:"mediaType=application/json"`
}

type UpdateAnAPIVersion200ApplicationJSONVersion struct {
	API       *string `json:"api"`
	CreatedAt *string `json:"createdAt"`
	CreatedBy *string `json:"createdBy"`
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	UpdatedAt *string `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy"`
}

type UpdateAnAPIVersion200ApplicationJSON struct {
	Version *UpdateAnAPIVersion200ApplicationJSONVersion `json:"version"`
}

type UpdateAnAPIVersionResponse struct {
	ContentType                                string
	StatusCode                                 int64
	UpdateAnAPIVersion200ApplicationJSONObject *UpdateAnAPIVersion200ApplicationJSON
}
