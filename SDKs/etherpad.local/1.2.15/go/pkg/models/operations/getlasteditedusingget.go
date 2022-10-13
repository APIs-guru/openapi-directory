package operations

type GetLastEditedUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetLastEditedUsingGetRequest struct {
	QueryParams GetLastEditedUsingGetQueryParams
}

type GetLastEditedUsingGet200ApplicationJSONData struct {
	LastEdited *int64 `json:"lastEdited"`
}

type GetLastEditedUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code"`
	Data    *GetLastEditedUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                      `json:"message"`
}

type GetLastEditedUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetLastEditedUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetLastEditedUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetLastEditedUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetLastEditedUsingGet200ApplicationJSONObject *GetLastEditedUsingGet200ApplicationJSON
	GetLastEditedUsingGet400ApplicationJSONObject *GetLastEditedUsingGet400ApplicationJSON
	GetLastEditedUsingGet401ApplicationJSONObject *GetLastEditedUsingGet401ApplicationJSON
	GetLastEditedUsingGet500ApplicationJSONObject *GetLastEditedUsingGet500ApplicationJSON
}
