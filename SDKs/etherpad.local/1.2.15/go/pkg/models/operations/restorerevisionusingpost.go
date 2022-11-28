package operations

type RestoreRevisionUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type RestoreRevisionUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPostRequest struct {
	QueryParams RestoreRevisionUsingPostQueryParams
}

type RestoreRevisionUsingPostResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	RestoreRevisionUsingPost200ApplicationJSONObject *RestoreRevisionUsingPost200ApplicationJSON
	RestoreRevisionUsingPost400ApplicationJSONObject *RestoreRevisionUsingPost400ApplicationJSON
	RestoreRevisionUsingPost401ApplicationJSONObject *RestoreRevisionUsingPost401ApplicationJSON
	RestoreRevisionUsingPost500ApplicationJSONObject *RestoreRevisionUsingPost500ApplicationJSON
}
