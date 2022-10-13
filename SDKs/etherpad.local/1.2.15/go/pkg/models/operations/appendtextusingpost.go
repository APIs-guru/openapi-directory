package operations

type AppendTextUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type AppendTextUsingPostRequest struct {
	QueryParams AppendTextUsingPostQueryParams
}

type AppendTextUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingPostResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	AppendTextUsingPost200ApplicationJSONObject *AppendTextUsingPost200ApplicationJSON
	AppendTextUsingPost400ApplicationJSONObject *AppendTextUsingPost400ApplicationJSON
	AppendTextUsingPost401ApplicationJSONObject *AppendTextUsingPost401ApplicationJSON
	AppendTextUsingPost500ApplicationJSONObject *AppendTextUsingPost500ApplicationJSON
}
