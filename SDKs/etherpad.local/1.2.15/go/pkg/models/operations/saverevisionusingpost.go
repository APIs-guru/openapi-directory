package operations

type SaveRevisionUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type SaveRevisionUsingPostRequest struct {
	QueryParams SaveRevisionUsingPostQueryParams
}

type SaveRevisionUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SaveRevisionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SaveRevisionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SaveRevisionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SaveRevisionUsingPostResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	SaveRevisionUsingPost200ApplicationJSONObject *SaveRevisionUsingPost200ApplicationJSON
	SaveRevisionUsingPost400ApplicationJSONObject *SaveRevisionUsingPost400ApplicationJSON
	SaveRevisionUsingPost401ApplicationJSONObject *SaveRevisionUsingPost401ApplicationJSON
	SaveRevisionUsingPost500ApplicationJSONObject *SaveRevisionUsingPost500ApplicationJSON
}
