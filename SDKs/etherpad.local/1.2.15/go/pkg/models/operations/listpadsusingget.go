package operations

type ListPadsUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListPadsUsingGetRequest struct {
	QueryParams ListPadsUsingGetQueryParams
}

type ListPadsUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs,omitempty"`
}

type ListPadsUsingGet200ApplicationJSON struct {
	Code    *int64                                  `json:"code,omitempty"`
	Data    *ListPadsUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                 `json:"message,omitempty"`
}

type ListPadsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsUsingGetResponse struct {
	ContentType                              string
	StatusCode                               int64
	ListPadsUsingGet200ApplicationJSONObject *ListPadsUsingGet200ApplicationJSON
	ListPadsUsingGet400ApplicationJSONObject *ListPadsUsingGet400ApplicationJSON
	ListPadsUsingGet401ApplicationJSONObject *ListPadsUsingGet401ApplicationJSON
	ListPadsUsingGet500ApplicationJSONObject *ListPadsUsingGet500ApplicationJSON
}
