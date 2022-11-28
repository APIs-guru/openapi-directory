package operations

type DeleteAnAPIVersionPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type DeleteAnAPIVersion200ApplicationJSONVersion struct {
	ID *string `json:"id,omitempty"`
}

type DeleteAnAPIVersion200ApplicationJSON struct {
	Version *DeleteAnAPIVersion200ApplicationJSONVersion `json:"version,omitempty"`
}

type DeleteAnAPIVersionRequest struct {
	PathParams DeleteAnAPIVersionPathParams
}

type DeleteAnAPIVersionResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DeleteAnAPIVersion200ApplicationJSONObject *DeleteAnAPIVersion200ApplicationJSON
}
