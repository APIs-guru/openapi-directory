package operations

type CreatePadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type CreatePadUsingPostRequest struct {
	QueryParams CreatePadUsingPostQueryParams
}

type CreatePadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreatePadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreatePadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreatePadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreatePadUsingPostResponse struct {
	ContentType                                string
	StatusCode                                 int64
	CreatePadUsingPost200ApplicationJSONObject *CreatePadUsingPost200ApplicationJSON
	CreatePadUsingPost400ApplicationJSONObject *CreatePadUsingPost400ApplicationJSON
	CreatePadUsingPost401ApplicationJSONObject *CreatePadUsingPost401ApplicationJSON
	CreatePadUsingPost500ApplicationJSONObject *CreatePadUsingPost500ApplicationJSON
}
