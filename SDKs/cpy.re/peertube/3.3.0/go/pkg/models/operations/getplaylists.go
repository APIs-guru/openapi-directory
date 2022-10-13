package operations

type GetPlaylistsQueryParams struct {
	Count *int64  `queryParam:"style=form,explode=true,name=count"`
	Sort  *string `queryParam:"style=form,explode=true,name=sort"`
	Start *int64  `queryParam:"style=form,explode=true,name=start"`
}

type GetPlaylistsRequest struct {
	QueryParams GetPlaylistsQueryParams
}

type GetPlaylists200ApplicationJSON struct {
	Data  []interface{} `json:"data"`
	Total *int64        `json:"total"`
}

type GetPlaylistsResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetPlaylists200ApplicationJSONObject *GetPlaylists200ApplicationJSON
}
