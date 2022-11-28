package operations

type GetVideoCaptionsPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type GetVideoCaptions200ApplicationJSON struct {
	Data  []interface{} `json:"data,omitempty"`
	Total *int64        `json:"total,omitempty"`
}

type GetVideoCaptionsRequest struct {
	PathParams GetVideoCaptionsPathParams
}

type GetVideoCaptionsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetVideoCaptions200ApplicationJSONObject *GetVideoCaptions200ApplicationJSON
}
