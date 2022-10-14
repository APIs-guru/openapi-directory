package operations

type CreateAuthorUsingPostQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type CreateAuthorUsingPostRequest struct {
	QueryParams CreateAuthorUsingPostQueryParams
}

type CreateAuthorUsingPost200ApplicationJSONData struct {
	AuthorID *string `json:"authorID,omitempty"`
}

type CreateAuthorUsingPost200ApplicationJSON struct {
	Code    *int64                                       `json:"code,omitempty"`
	Data    *CreateAuthorUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                      `json:"message,omitempty"`
}

type CreateAuthorUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateAuthorUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateAuthorUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateAuthorUsingPostResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	CreateAuthorUsingPost200ApplicationJSONObject *CreateAuthorUsingPost200ApplicationJSON
	CreateAuthorUsingPost400ApplicationJSONObject *CreateAuthorUsingPost400ApplicationJSON
	CreateAuthorUsingPost401ApplicationJSONObject *CreateAuthorUsingPost401ApplicationJSON
	CreateAuthorUsingPost500ApplicationJSONObject *CreateAuthorUsingPost500ApplicationJSON
}
