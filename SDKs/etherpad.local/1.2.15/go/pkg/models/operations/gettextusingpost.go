package operations

type GetTextUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type GetTextUsingPost200ApplicationJSONData struct {
	Text *string `json:"text,omitempty"`
}

type GetTextUsingPost200ApplicationJSON struct {
	Code    *int64                                  `json:"code,omitempty"`
	Data    *GetTextUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                 `json:"message,omitempty"`
}

type GetTextUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetTextUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetTextUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetTextUsingPostRequest struct {
	QueryParams GetTextUsingPostQueryParams
}

type GetTextUsingPostResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetTextUsingPost200ApplicationJSONObject *GetTextUsingPost200ApplicationJSON
	GetTextUsingPost400ApplicationJSONObject *GetTextUsingPost400ApplicationJSON
	GetTextUsingPost401ApplicationJSONObject *GetTextUsingPost401ApplicationJSON
	GetTextUsingPost500ApplicationJSONObject *GetTextUsingPost500ApplicationJSON
}
