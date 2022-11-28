package operations

type MovePadUsingGetQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type MovePadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type MovePadUsingGetRequest struct {
	QueryParams MovePadUsingGetQueryParams
}

type MovePadUsingGetResponse struct {
	ContentType                             string
	StatusCode                              int64
	MovePadUsingGet200ApplicationJSONObject *MovePadUsingGet200ApplicationJSON
	MovePadUsingGet400ApplicationJSONObject *MovePadUsingGet400ApplicationJSON
	MovePadUsingGet401ApplicationJSONObject *MovePadUsingGet401ApplicationJSON
	MovePadUsingGet500ApplicationJSONObject *MovePadUsingGet500ApplicationJSON
}
