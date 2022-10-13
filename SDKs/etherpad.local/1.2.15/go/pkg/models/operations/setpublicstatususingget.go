package operations

type SetPublicStatusUsingGetQueryParams struct {
	PadID        *string `queryParam:"style=form,explode=true,name=padID"`
	PublicStatus *string `queryParam:"style=form,explode=true,name=publicStatus"`
}

type SetPublicStatusUsingGetRequest struct {
	QueryParams SetPublicStatusUsingGetQueryParams
}

type SetPublicStatusUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingGetResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	SetPublicStatusUsingGet200ApplicationJSONObject *SetPublicStatusUsingGet200ApplicationJSON
	SetPublicStatusUsingGet400ApplicationJSONObject *SetPublicStatusUsingGet400ApplicationJSON
	SetPublicStatusUsingGet401ApplicationJSONObject *SetPublicStatusUsingGet401ApplicationJSON
	SetPublicStatusUsingGet500ApplicationJSONObject *SetPublicStatusUsingGet500ApplicationJSON
}
