package operations

type SingleAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type SingleAPI200ApplicationJSONAPI struct {
	CreatedAt   *string `json:"createdAt,omitempty"`
	CreatedBy   *string `json:"createdBy,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	Summary     *string `json:"summary,omitempty"`
	UpdatedAt   *string `json:"updatedAt,omitempty"`
}

type SingleAPI200ApplicationJSON struct {
	API *SingleAPI200ApplicationJSONAPI `json:"api,omitempty"`
}

type SingleAPIRequest struct {
	PathParams SingleAPIPathParams
}

type SingleAPIResponse struct {
	ContentType                       string
	StatusCode                        int64
	SingleAPI200ApplicationJSONObject *SingleAPI200ApplicationJSON
}
