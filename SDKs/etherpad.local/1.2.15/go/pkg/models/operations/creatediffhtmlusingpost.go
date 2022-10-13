package operations

type CreateDiffHTMLUsingPostQueryParams struct {
	EndRev   *string `queryParam:"style=form,explode=true,name=endRev"`
	PadID    *string `queryParam:"style=form,explode=true,name=padID"`
	StartRev *string `queryParam:"style=form,explode=true,name=startRev"`
}

type CreateDiffHTMLUsingPostRequest struct {
	QueryParams CreateDiffHTMLUsingPostQueryParams
}

type CreateDiffHTMLUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingPostResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateDiffHTMLUsingPost200ApplicationJSONObject *CreateDiffHTMLUsingPost200ApplicationJSON
	CreateDiffHTMLUsingPost400ApplicationJSONObject *CreateDiffHTMLUsingPost400ApplicationJSON
	CreateDiffHTMLUsingPost401ApplicationJSONObject *CreateDiffHTMLUsingPost401ApplicationJSON
	CreateDiffHTMLUsingPost500ApplicationJSONObject *CreateDiffHTMLUsingPost500ApplicationJSON
}
