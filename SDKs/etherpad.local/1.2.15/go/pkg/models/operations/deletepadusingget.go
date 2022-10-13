package operations

type DeletePadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type DeletePadUsingGetRequest struct {
	QueryParams DeletePadUsingGetQueryParams
}

type DeletePadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingGetResponse struct {
	ContentType                               string
	StatusCode                                int64
	DeletePadUsingGet200ApplicationJSONObject *DeletePadUsingGet200ApplicationJSON
	DeletePadUsingGet400ApplicationJSONObject *DeletePadUsingGet400ApplicationJSON
	DeletePadUsingGet401ApplicationJSONObject *DeletePadUsingGet401ApplicationJSON
	DeletePadUsingGet500ApplicationJSONObject *DeletePadUsingGet500ApplicationJSON
}
