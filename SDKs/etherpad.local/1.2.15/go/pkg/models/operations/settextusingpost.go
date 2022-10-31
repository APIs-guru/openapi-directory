package operations

type SetTextUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type SetTextUsingPostRequest struct {
	QueryParams SetTextUsingPostQueryParams
}

type SetTextUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetTextUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetTextUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetTextUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetTextUsingPostResponse struct {
	ContentType                              string
	StatusCode                               int64
	SetTextUsingPost200ApplicationJSONObject *SetTextUsingPost200ApplicationJSON
	SetTextUsingPost400ApplicationJSONObject *SetTextUsingPost400ApplicationJSON
	SetTextUsingPost401ApplicationJSONObject *SetTextUsingPost401ApplicationJSON
	SetTextUsingPost500ApplicationJSONObject *SetTextUsingPost500ApplicationJSON
}
