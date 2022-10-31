package operations

type DeleteGroupUsingPostQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type DeleteGroupUsingPostRequest struct {
	QueryParams DeleteGroupUsingPostQueryParams
}

type DeleteGroupUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	DeleteGroupUsingPost200ApplicationJSONObject *DeleteGroupUsingPost200ApplicationJSON
	DeleteGroupUsingPost400ApplicationJSONObject *DeleteGroupUsingPost400ApplicationJSON
	DeleteGroupUsingPost401ApplicationJSONObject *DeleteGroupUsingPost401ApplicationJSON
	DeleteGroupUsingPost500ApplicationJSONObject *DeleteGroupUsingPost500ApplicationJSON
}
