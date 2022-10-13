package operations

type ListPadsUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListPadsUsingGetRequest struct {
	QueryParams ListPadsUsingGetQueryParams
}

type ListPadsUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs"`
}

type ListPadsUsingGet200ApplicationJSON struct {
	Code    *int64                                  `json:"code"`
	Data    *ListPadsUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                 `json:"message"`
}

type ListPadsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsUsingGetResponse struct {
	ContentType                              string
	StatusCode                               int64
	ListPadsUsingGet200ApplicationJSONObject *ListPadsUsingGet200ApplicationJSON
	ListPadsUsingGet400ApplicationJSONObject *ListPadsUsingGet400ApplicationJSON
	ListPadsUsingGet401ApplicationJSONObject *ListPadsUsingGet401ApplicationJSON
	ListPadsUsingGet500ApplicationJSONObject *ListPadsUsingGet500ApplicationJSON
}
