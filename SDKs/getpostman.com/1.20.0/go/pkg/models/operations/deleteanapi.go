package operations

type DeleteAnAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type DeleteAnAPIRequest struct {
	PathParams DeleteAnAPIPathParams
}

type DeleteAnAPI200ApplicationJSONAPI struct {
	ID *string `json:"id"`
}

type DeleteAnAPI200ApplicationJSON struct {
	API *DeleteAnAPI200ApplicationJSONAPI `json:"api"`
}

type DeleteAnAPIResponse struct {
	ContentType                         string
	StatusCode                          int64
	DeleteAnAPI200ApplicationJSONObject *DeleteAnAPI200ApplicationJSON
}
