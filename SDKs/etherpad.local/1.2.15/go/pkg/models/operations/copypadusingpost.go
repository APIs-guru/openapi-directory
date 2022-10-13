package operations

type CopyPadUsingPostQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type CopyPadUsingPostRequest struct {
	QueryParams CopyPadUsingPostQueryParams
}

type CopyPadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingPostResponse struct {
	ContentType                              string
	StatusCode                               int64
	CopyPadUsingPost200ApplicationJSONObject *CopyPadUsingPost200ApplicationJSON
	CopyPadUsingPost400ApplicationJSONObject *CopyPadUsingPost400ApplicationJSON
	CopyPadUsingPost401ApplicationJSONObject *CopyPadUsingPost401ApplicationJSON
	CopyPadUsingPost500ApplicationJSONObject *CopyPadUsingPost500ApplicationJSON
}
