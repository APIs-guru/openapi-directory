package operations

type CreateAuthorUsingGetQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type CreateAuthorUsingGet200ApplicationJSONData struct {
	AuthorID *string `json:"authorID,omitempty"`
}

type CreateAuthorUsingGet200ApplicationJSON struct {
	Code    *int64                                      `json:"code,omitempty"`
	Data    *CreateAuthorUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                     `json:"message,omitempty"`
}

type CreateAuthorUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateAuthorUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateAuthorUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateAuthorUsingGetRequest struct {
	QueryParams CreateAuthorUsingGetQueryParams
}

type CreateAuthorUsingGetResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CreateAuthorUsingGet200ApplicationJSONObject *CreateAuthorUsingGet200ApplicationJSON
	CreateAuthorUsingGet400ApplicationJSONObject *CreateAuthorUsingGet400ApplicationJSON
	CreateAuthorUsingGet401ApplicationJSONObject *CreateAuthorUsingGet401ApplicationJSON
	CreateAuthorUsingGet500ApplicationJSONObject *CreateAuthorUsingGet500ApplicationJSON
}
