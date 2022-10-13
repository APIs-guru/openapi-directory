package operations

type CopyPadWithoutHistoryUsingPostQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type CopyPadWithoutHistoryUsingPostRequest struct {
	QueryParams CopyPadWithoutHistoryUsingPostQueryParams
}

type CopyPadWithoutHistoryUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadWithoutHistoryUsingPostResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	CopyPadWithoutHistoryUsingPost200ApplicationJSONObject *CopyPadWithoutHistoryUsingPost200ApplicationJSON
	CopyPadWithoutHistoryUsingPost400ApplicationJSONObject *CopyPadWithoutHistoryUsingPost400ApplicationJSON
	CopyPadWithoutHistoryUsingPost401ApplicationJSONObject *CopyPadWithoutHistoryUsingPost401ApplicationJSON
	CopyPadWithoutHistoryUsingPost500ApplicationJSONObject *CopyPadWithoutHistoryUsingPost500ApplicationJSON
}
