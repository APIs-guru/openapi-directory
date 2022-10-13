package operations

type PadUsersCountUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersCountUsingGetRequest struct {
	QueryParams PadUsersCountUsingGetQueryParams
}

type PadUsersCountUsingGet200ApplicationJSONData struct {
	PadUsersCount *int64 `json:"padUsersCount"`
}

type PadUsersCountUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code"`
	Data    *PadUsersCountUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                      `json:"message"`
}

type PadUsersCountUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersCountUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersCountUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersCountUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PadUsersCountUsingGet200ApplicationJSONObject *PadUsersCountUsingGet200ApplicationJSON
	PadUsersCountUsingGet400ApplicationJSONObject *PadUsersCountUsingGet400ApplicationJSON
	PadUsersCountUsingGet401ApplicationJSONObject *PadUsersCountUsingGet401ApplicationJSON
	PadUsersCountUsingGet500ApplicationJSONObject *PadUsersCountUsingGet500ApplicationJSON
}
