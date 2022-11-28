package operations

type CopyPadWithoutHistoryUsingGetQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type CopyPadWithoutHistoryUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadWithoutHistoryUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadWithoutHistoryUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadWithoutHistoryUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadWithoutHistoryUsingGetRequest struct {
	QueryParams CopyPadWithoutHistoryUsingGetQueryParams
}

type CopyPadWithoutHistoryUsingGetResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	CopyPadWithoutHistoryUsingGet200ApplicationJSONObject *CopyPadWithoutHistoryUsingGet200ApplicationJSON
	CopyPadWithoutHistoryUsingGet400ApplicationJSONObject *CopyPadWithoutHistoryUsingGet400ApplicationJSON
	CopyPadWithoutHistoryUsingGet401ApplicationJSONObject *CopyPadWithoutHistoryUsingGet401ApplicationJSON
	CopyPadWithoutHistoryUsingGet500ApplicationJSONObject *CopyPadWithoutHistoryUsingGet500ApplicationJSON
}
