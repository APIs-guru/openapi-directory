package operations

type PadUsersUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersUsingGetRequest struct {
	QueryParams PadUsersUsingGetQueryParams
}

type PadUsersUsingGet200ApplicationJSONDataPadUsers struct {
	ColorID   *string `json:"colorId"`
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	Timestamp *int64  `json:"timestamp"`
}

type PadUsersUsingGet200ApplicationJSONData struct {
	PadUsers []PadUsersUsingGet200ApplicationJSONDataPadUsers `json:"padUsers"`
}

type PadUsersUsingGet200ApplicationJSON struct {
	Code    *int64                                  `json:"code"`
	Data    *PadUsersUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                 `json:"message"`
}

type PadUsersUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersUsingGetResponse struct {
	ContentType                              string
	StatusCode                               int64
	PadUsersUsingGet200ApplicationJSONObject *PadUsersUsingGet200ApplicationJSON
	PadUsersUsingGet400ApplicationJSONObject *PadUsersUsingGet400ApplicationJSON
	PadUsersUsingGet401ApplicationJSONObject *PadUsersUsingGet401ApplicationJSON
	PadUsersUsingGet500ApplicationJSONObject *PadUsersUsingGet500ApplicationJSON
}
