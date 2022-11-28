package operations

type WimstatusQueryParams struct {
	Vid *string `queryParam:"style=form,explode=true,name=vid"`
}

type Wimstatus200ApplicationJSON struct {
	WimStarted *int64  `json:"wim_started,omitempty"`
	WimStatus  *string `json:"wim_status,omitempty"`
}

type WimstatusRequest struct {
	QueryParams WimstatusQueryParams
}

type WimstatusResponse struct {
	ContentType                       string
	StatusCode                        int64
	Wimstatus200ApplicationJSONObject *Wimstatus200ApplicationJSON
}
