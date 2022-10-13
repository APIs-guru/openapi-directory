package operations

type RestoreRevisionUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type RestoreRevisionUsingPostRequest struct {
	QueryParams RestoreRevisionUsingPostQueryParams
}

type RestoreRevisionUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type RestoreRevisionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type RestoreRevisionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type RestoreRevisionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type RestoreRevisionUsingPostResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	RestoreRevisionUsingPost200ApplicationJSONObject *RestoreRevisionUsingPost200ApplicationJSON
	RestoreRevisionUsingPost400ApplicationJSONObject *RestoreRevisionUsingPost400ApplicationJSON
	RestoreRevisionUsingPost401ApplicationJSONObject *RestoreRevisionUsingPost401ApplicationJSON
	RestoreRevisionUsingPost500ApplicationJSONObject *RestoreRevisionUsingPost500ApplicationJSON
}
