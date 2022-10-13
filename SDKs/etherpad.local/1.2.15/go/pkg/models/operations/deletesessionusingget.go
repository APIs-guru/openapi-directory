package operations

type DeleteSessionUsingGetQueryParams struct {
	SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
}

type DeleteSessionUsingGetRequest struct {
	QueryParams DeleteSessionUsingGetQueryParams
}

type DeleteSessionUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	DeleteSessionUsingGet200ApplicationJSONObject *DeleteSessionUsingGet200ApplicationJSON
	DeleteSessionUsingGet400ApplicationJSONObject *DeleteSessionUsingGet400ApplicationJSON
	DeleteSessionUsingGet401ApplicationJSONObject *DeleteSessionUsingGet401ApplicationJSON
	DeleteSessionUsingGet500ApplicationJSONObject *DeleteSessionUsingGet500ApplicationJSON
}
