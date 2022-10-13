package operations

type WimstatusQueryParams struct {
	Vid *string `queryParam:"style=form,explode=true,name=vid"`
}

type WimstatusRequest struct {
	QueryParams WimstatusQueryParams
}

type Wimstatus200ApplicationJSON struct {
	WimStarted *int64  `json:"wim_started"`
	WimStatus  *string `json:"wim_status"`
}

type WimstatusResponse struct {
	ContentType                       string
	StatusCode                        int64
	Wimstatus200ApplicationJSONObject *Wimstatus200ApplicationJSON
}
