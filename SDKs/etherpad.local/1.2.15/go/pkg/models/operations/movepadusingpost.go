package operations

type MovePadUsingPostQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type MovePadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingPostRequest struct {
	QueryParams MovePadUsingPostQueryParams
}

type MovePadUsingPostResponse struct {
	ContentType                              string
	StatusCode                               int64
	MovePadUsingPost200ApplicationJSONObject *MovePadUsingPost200ApplicationJSON
	MovePadUsingPost400ApplicationJSONObject *MovePadUsingPost400ApplicationJSON
	MovePadUsingPost401ApplicationJSONObject *MovePadUsingPost401ApplicationJSON
	MovePadUsingPost500ApplicationJSONObject *MovePadUsingPost500ApplicationJSON
}
