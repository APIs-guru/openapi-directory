package operations

type DeletePadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type DeletePadUsingPostRequest struct {
	QueryParams DeletePadUsingPostQueryParams
}

type DeletePadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeletePadUsingPostResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DeletePadUsingPost200ApplicationJSONObject *DeletePadUsingPost200ApplicationJSON
	DeletePadUsingPost400ApplicationJSONObject *DeletePadUsingPost400ApplicationJSON
	DeletePadUsingPost401ApplicationJSONObject *DeletePadUsingPost401ApplicationJSON
	DeletePadUsingPost500ApplicationJSONObject *DeletePadUsingPost500ApplicationJSON
}
