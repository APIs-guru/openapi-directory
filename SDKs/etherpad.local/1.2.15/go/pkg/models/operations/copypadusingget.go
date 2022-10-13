package operations

type CopyPadUsingGetQueryParams struct {
	DestinationID *string `queryParam:"style=form,explode=true,name=destinationID"`
	Force         *string `queryParam:"style=form,explode=true,name=force"`
	SourceID      *string `queryParam:"style=form,explode=true,name=sourceID"`
}

type CopyPadUsingGetRequest struct {
	QueryParams CopyPadUsingGetQueryParams
}

type CopyPadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CopyPadUsingGetResponse struct {
	ContentType                             string
	StatusCode                              int64
	CopyPadUsingGet200ApplicationJSONObject *CopyPadUsingGet200ApplicationJSON
	CopyPadUsingGet400ApplicationJSONObject *CopyPadUsingGet400ApplicationJSON
	CopyPadUsingGet401ApplicationJSONObject *CopyPadUsingGet401ApplicationJSON
	CopyPadUsingGet500ApplicationJSONObject *CopyPadUsingGet500ApplicationJSON
}
