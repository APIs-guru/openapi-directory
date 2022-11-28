package operations

type CreateDiffHTMLUsingPostQueryParams struct {
	EndRev   *string `queryParam:"style=form,explode=true,name=endRev"`
	PadID    *string `queryParam:"style=form,explode=true,name=padID"`
	StartRev *string `queryParam:"style=form,explode=true,name=startRev"`
}

type CreateDiffHTMLUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateDiffHTMLUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateDiffHTMLUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateDiffHTMLUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateDiffHTMLUsingPostRequest struct {
	QueryParams CreateDiffHTMLUsingPostQueryParams
}

type CreateDiffHTMLUsingPostResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateDiffHTMLUsingPost200ApplicationJSONObject *CreateDiffHTMLUsingPost200ApplicationJSON
	CreateDiffHTMLUsingPost400ApplicationJSONObject *CreateDiffHTMLUsingPost400ApplicationJSON
	CreateDiffHTMLUsingPost401ApplicationJSONObject *CreateDiffHTMLUsingPost401ApplicationJSON
	CreateDiffHTMLUsingPost500ApplicationJSONObject *CreateDiffHTMLUsingPost500ApplicationJSON
}
