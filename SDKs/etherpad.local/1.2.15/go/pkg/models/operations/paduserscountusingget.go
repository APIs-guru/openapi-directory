package operations

type PadUsersCountUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersCountUsingGetRequest struct {
	QueryParams PadUsersCountUsingGetQueryParams
}

type PadUsersCountUsingGet200ApplicationJSONData struct {
	PadUsersCount *int64 `json:"padUsersCount,omitempty"`
}

type PadUsersCountUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code,omitempty"`
	Data    *PadUsersCountUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                      `json:"message,omitempty"`
}

type PadUsersCountUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PadUsersCountUsingGet200ApplicationJSONObject *PadUsersCountUsingGet200ApplicationJSON
	PadUsersCountUsingGet400ApplicationJSONObject *PadUsersCountUsingGet400ApplicationJSON
	PadUsersCountUsingGet401ApplicationJSONObject *PadUsersCountUsingGet401ApplicationJSON
	PadUsersCountUsingGet500ApplicationJSONObject *PadUsersCountUsingGet500ApplicationJSON
}
