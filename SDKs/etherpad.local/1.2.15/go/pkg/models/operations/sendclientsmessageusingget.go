package operations

type SendClientsMessageUsingGetQueryParams struct {
	Msg   *string `queryParam:"style=form,explode=true,name=msg"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type SendClientsMessageUsingGetRequest struct {
	QueryParams SendClientsMessageUsingGetQueryParams
}

type SendClientsMessageUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SendClientsMessageUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SendClientsMessageUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SendClientsMessageUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SendClientsMessageUsingGetResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	SendClientsMessageUsingGet200ApplicationJSONObject *SendClientsMessageUsingGet200ApplicationJSON
	SendClientsMessageUsingGet400ApplicationJSONObject *SendClientsMessageUsingGet400ApplicationJSON
	SendClientsMessageUsingGet401ApplicationJSONObject *SendClientsMessageUsingGet401ApplicationJSON
	SendClientsMessageUsingGet500ApplicationJSONObject *SendClientsMessageUsingGet500ApplicationJSON
}
