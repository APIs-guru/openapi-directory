package operations

type GetPublicStatusUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetPublicStatusUsingGet200ApplicationJSONData struct {
	PublicStatus *bool `json:"publicStatus,omitempty"`
}

type GetPublicStatusUsingGet200ApplicationJSON struct {
	Code    *int64                                         `json:"code,omitempty"`
	Data    *GetPublicStatusUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                        `json:"message,omitempty"`
}

type GetPublicStatusUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPublicStatusUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPublicStatusUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPublicStatusUsingGetRequest struct {
	QueryParams GetPublicStatusUsingGetQueryParams
}

type GetPublicStatusUsingGetResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetPublicStatusUsingGet200ApplicationJSONObject *GetPublicStatusUsingGet200ApplicationJSON
	GetPublicStatusUsingGet400ApplicationJSONObject *GetPublicStatusUsingGet400ApplicationJSON
	GetPublicStatusUsingGet401ApplicationJSONObject *GetPublicStatusUsingGet401ApplicationJSON
	GetPublicStatusUsingGet500ApplicationJSONObject *GetPublicStatusUsingGet500ApplicationJSON
}
