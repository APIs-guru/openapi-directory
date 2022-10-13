package operations

type CreateDiffHTMLUsingGetQueryParams struct {
	EndRev   *string `queryParam:"style=form,explode=true,name=endRev"`
	PadID    *string `queryParam:"style=form,explode=true,name=padID"`
	StartRev *string `queryParam:"style=form,explode=true,name=startRev"`
}

type CreateDiffHTMLUsingGetRequest struct {
	QueryParams CreateDiffHTMLUsingGetQueryParams
}

type CreateDiffHTMLUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateDiffHTMLUsingGetResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CreateDiffHTMLUsingGet200ApplicationJSONObject *CreateDiffHTMLUsingGet200ApplicationJSON
	CreateDiffHTMLUsingGet400ApplicationJSONObject *CreateDiffHTMLUsingGet400ApplicationJSON
	CreateDiffHTMLUsingGet401ApplicationJSONObject *CreateDiffHTMLUsingGet401ApplicationJSON
	CreateDiffHTMLUsingGet500ApplicationJSONObject *CreateDiffHTMLUsingGet500ApplicationJSON
}
