package operations

type ListPadsUsingPostQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListPadsUsingPostRequest struct {
	QueryParams ListPadsUsingPostQueryParams
}

type ListPadsUsingPost200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs"`
}

type ListPadsUsingPost200ApplicationJSON struct {
	Code    *int64                                   `json:"code"`
	Data    *ListPadsUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                  `json:"message"`
}

type ListPadsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsUsingPostResponse struct {
	ContentType                               string
	StatusCode                                int64
	ListPadsUsingPost200ApplicationJSONObject *ListPadsUsingPost200ApplicationJSON
	ListPadsUsingPost400ApplicationJSONObject *ListPadsUsingPost400ApplicationJSON
	ListPadsUsingPost401ApplicationJSONObject *ListPadsUsingPost401ApplicationJSON
	ListPadsUsingPost500ApplicationJSONObject *ListPadsUsingPost500ApplicationJSON
}
