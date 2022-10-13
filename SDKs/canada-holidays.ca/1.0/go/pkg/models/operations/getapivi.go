package operations

type GetAPIVi200ApplicationJSONLinksHolidays struct {
	Href *string `json:"href"`
}

type GetAPIVi200ApplicationJSONLinksProvinces struct {
	Href *string `json:"href"`
}

type GetAPIVi200ApplicationJSONLinksSelf struct {
	Href *string `json:"href"`
}

type GetAPIVi200ApplicationJSONLinks struct {
	Holidays  *GetAPIVi200ApplicationJSONLinksHolidays  `json:"holidays"`
	Provinces *GetAPIVi200ApplicationJSONLinksProvinces `json:"provinces"`
	Self      *GetAPIVi200ApplicationJSONLinksSelf      `json:"self"`
}

type GetAPIVi200ApplicationJSON struct {
	Links   *GetAPIVi200ApplicationJSONLinks `json:"_links"`
	Message *string                          `json:"message"`
}

type GetAPIViResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetAPIVi200ApplicationJSONObject *GetAPIVi200ApplicationJSON
}
