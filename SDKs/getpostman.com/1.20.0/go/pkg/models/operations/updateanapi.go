package operations

type UpdateAnAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type UpdateAnAPIRequestBodyAPI struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type UpdateAnAPIRequestBody struct {
	API *UpdateAnAPIRequestBodyAPI `json:"api,omitempty"`
}

type UpdateAnAPI200ApplicationJSONAPI struct {
	CreatedAt   *string `json:"createdAt,omitempty"`
	CreatedBy   *string `json:"createdBy,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	Summary     *string `json:"summary,omitempty"`
	UpdatedAt   *string `json:"updatedAt,omitempty"`
}

type UpdateAnAPI200ApplicationJSON struct {
	API *UpdateAnAPI200ApplicationJSONAPI `json:"api,omitempty"`
}

type UpdateAnAPIRequest struct {
	PathParams UpdateAnAPIPathParams
	Request    *UpdateAnAPIRequestBody `request:"mediaType=application/json"`
}

type UpdateAnAPIResponse struct {
	ContentType                         string
	StatusCode                          int64
	UpdateAnAPI200ApplicationJSONObject *UpdateAnAPI200ApplicationJSON
}
