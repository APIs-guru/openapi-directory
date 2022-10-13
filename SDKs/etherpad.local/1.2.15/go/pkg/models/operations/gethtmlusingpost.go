package operations

type GetHTMLUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type GetHTMLUsingPostRequest struct {
	QueryParams GetHTMLUsingPostQueryParams
}

type GetHTMLUsingPost200ApplicationJSONData struct {
	HTML *string `json:"html"`
}

type GetHTMLUsingPost200ApplicationJSON struct {
	Code    *int64                                  `json:"code"`
	Data    *GetHTMLUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                 `json:"message"`
}

type GetHTMLUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetHTMLUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetHTMLUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetHTMLUsingPostResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetHTMLUsingPost200ApplicationJSONObject *GetHTMLUsingPost200ApplicationJSON
	GetHTMLUsingPost400ApplicationJSONObject *GetHTMLUsingPost400ApplicationJSON
	GetHTMLUsingPost401ApplicationJSONObject *GetHTMLUsingPost401ApplicationJSON
	GetHTMLUsingPost500ApplicationJSONObject *GetHTMLUsingPost500ApplicationJSON
}
