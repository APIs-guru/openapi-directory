package operations

type UpdateAnAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type UpdateAnAPIRequestBodyAPI struct {
	Description *string `json:"description"`
	Name        *string `json:"name"`
}

type UpdateAnAPIRequestBody struct {
	API *UpdateAnAPIRequestBodyAPI `json:"api"`
}

type UpdateAnAPIRequest struct {
	PathParams UpdateAnAPIPathParams
	Request    *UpdateAnAPIRequestBody `request:"mediaType=application/json"`
}

type UpdateAnAPI200ApplicationJSONAPI struct {
	CreatedAt   *string `json:"createdAt"`
	CreatedBy   *string `json:"createdBy"`
	Description *string `json:"description"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
	Summary     *string `json:"summary"`
	UpdatedAt   *string `json:"updatedAt"`
}

type UpdateAnAPI200ApplicationJSON struct {
	API *UpdateAnAPI200ApplicationJSONAPI `json:"api"`
}

type UpdateAnAPIResponse struct {
	ContentType                         string
	StatusCode                          int64
	UpdateAnAPI200ApplicationJSONObject *UpdateAnAPI200ApplicationJSON
}
