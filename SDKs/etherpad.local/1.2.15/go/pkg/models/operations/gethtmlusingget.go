package operations

type GetHTMLUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type GetHTMLUsingGetRequest struct {
	QueryParams GetHTMLUsingGetQueryParams
}

type GetHTMLUsingGet200ApplicationJSONData struct {
	HTML *string `json:"html"`
}

type GetHTMLUsingGet200ApplicationJSON struct {
	Code    *int64                                 `json:"code"`
	Data    *GetHTMLUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                `json:"message"`
}

type GetHTMLUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetHTMLUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetHTMLUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetHTMLUsingGetResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetHTMLUsingGet200ApplicationJSONObject *GetHTMLUsingGet200ApplicationJSON
	GetHTMLUsingGet400ApplicationJSONObject *GetHTMLUsingGet400ApplicationJSON
	GetHTMLUsingGet401ApplicationJSONObject *GetHTMLUsingGet401ApplicationJSON
	GetHTMLUsingGet500ApplicationJSONObject *GetHTMLUsingGet500ApplicationJSON
}
