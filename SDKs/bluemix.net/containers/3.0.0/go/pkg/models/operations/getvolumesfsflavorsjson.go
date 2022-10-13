package operations

type GetVolumesFsFlavorsJSONHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetVolumesFsFlavorsJSONRequest struct {
	Headers GetVolumesFsFlavorsJSONHeaders
}

type GetVolumesFsFlavorsJSONResponse struct {
	ContentType                                       string
	GetVolumesFsFlavorsJSON200ApplicationJSONIntegers []int64
	StatusCode                                        int64
}
