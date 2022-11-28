package operations

type CopyPadUsingPostQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type CopyPadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CopyPadUsingPostRequest struct {
	QueryParams CopyPadUsingPostQueryParams
}

type CopyPadUsingPostResponse struct {
	ContentType                              string
	StatusCode                               int64
	CopyPadUsingPost200ApplicationJSONObject *CopyPadUsingPost200ApplicationJSON
	CopyPadUsingPost400ApplicationJSONObject *CopyPadUsingPost400ApplicationJSON
	CopyPadUsingPost401ApplicationJSONObject *CopyPadUsingPost401ApplicationJSON
	CopyPadUsingPost500ApplicationJSONObject *CopyPadUsingPost500ApplicationJSON
}
