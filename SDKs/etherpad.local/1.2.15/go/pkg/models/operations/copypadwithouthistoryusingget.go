package operations

type CopyPadWithoutHistoryUsingGetQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type CopyPadWithoutHistoryUsingGetRequest struct {
	QueryParams CopyPadWithoutHistoryUsingGetQueryParams
}

type CopyPadWithoutHistoryUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingGetResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	CopyPadWithoutHistoryUsingGet200ApplicationJSONObject *CopyPadWithoutHistoryUsingGet200ApplicationJSON
	CopyPadWithoutHistoryUsingGet400ApplicationJSONObject *CopyPadWithoutHistoryUsingGet400ApplicationJSON
	CopyPadWithoutHistoryUsingGet401ApplicationJSONObject *CopyPadWithoutHistoryUsingGet401ApplicationJSON
	CopyPadWithoutHistoryUsingGet500ApplicationJSONObject *CopyPadWithoutHistoryUsingGet500ApplicationJSON
}
