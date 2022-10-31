package operations

type GetRevisionChangesetUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type GetRevisionChangesetUsingPostRequest struct {
	QueryParams GetRevisionChangesetUsingPostQueryParams
}

type GetRevisionChangesetUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingPostResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	GetRevisionChangesetUsingPost200ApplicationJSONObject *GetRevisionChangesetUsingPost200ApplicationJSON
	GetRevisionChangesetUsingPost400ApplicationJSONObject *GetRevisionChangesetUsingPost400ApplicationJSON
	GetRevisionChangesetUsingPost401ApplicationJSONObject *GetRevisionChangesetUsingPost401ApplicationJSON
	GetRevisionChangesetUsingPost500ApplicationJSONObject *GetRevisionChangesetUsingPost500ApplicationJSON
}
