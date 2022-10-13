package operations

type SingleAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type SingleAPIRequest struct {
	PathParams SingleAPIPathParams
}

type SingleAPI200ApplicationJSONAPI struct {
	CreatedAt   *string `json:"createdAt"`
	CreatedBy   *string `json:"createdBy"`
	Description *string `json:"description"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
	Summary     *string `json:"summary"`
	UpdatedAt   *string `json:"updatedAt"`
}

type SingleAPI200ApplicationJSON struct {
	API *SingleAPI200ApplicationJSONAPI `json:"api"`
}

type SingleAPIResponse struct {
	ContentType                       string
	StatusCode                        int64
	SingleAPI200ApplicationJSONObject *SingleAPI200ApplicationJSON
}
