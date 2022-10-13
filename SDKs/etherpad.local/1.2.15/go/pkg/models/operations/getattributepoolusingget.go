package operations

type GetAttributePoolUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetAttributePoolUsingGetRequest struct {
	QueryParams GetAttributePoolUsingGetQueryParams
}

type GetAttributePoolUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAttributePoolUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAttributePoolUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAttributePoolUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAttributePoolUsingGetResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetAttributePoolUsingGet200ApplicationJSONObject *GetAttributePoolUsingGet200ApplicationJSON
	GetAttributePoolUsingGet400ApplicationJSONObject *GetAttributePoolUsingGet400ApplicationJSON
	GetAttributePoolUsingGet401ApplicationJSONObject *GetAttributePoolUsingGet401ApplicationJSON
	GetAttributePoolUsingGet500ApplicationJSONObject *GetAttributePoolUsingGet500ApplicationJSON
}
