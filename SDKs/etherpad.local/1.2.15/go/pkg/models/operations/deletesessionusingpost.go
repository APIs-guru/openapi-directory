package operations

type DeleteSessionUsingPostQueryParams struct {
	SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
}

type DeleteSessionUsingPostRequest struct {
	QueryParams DeleteSessionUsingPostQueryParams
}

type DeleteSessionUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type DeleteSessionUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteSessionUsingPost200ApplicationJSONObject *DeleteSessionUsingPost200ApplicationJSON
	DeleteSessionUsingPost400ApplicationJSONObject *DeleteSessionUsingPost400ApplicationJSON
	DeleteSessionUsingPost401ApplicationJSONObject *DeleteSessionUsingPost401ApplicationJSON
	DeleteSessionUsingPost500ApplicationJSONObject *DeleteSessionUsingPost500ApplicationJSON
}
