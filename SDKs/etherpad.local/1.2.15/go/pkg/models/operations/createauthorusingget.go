package operations

type CreateAuthorUsingGetQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type CreateAuthorUsingGetRequest struct {
	QueryParams CreateAuthorUsingGetQueryParams
}

type CreateAuthorUsingGet200ApplicationJSONData struct {
	AuthorID *string `json:"authorID"`
}

type CreateAuthorUsingGet200ApplicationJSON struct {
	Code    *int64                                      `json:"code"`
	Data    *CreateAuthorUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                     `json:"message"`
}

type CreateAuthorUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorUsingGetResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CreateAuthorUsingGet200ApplicationJSONObject *CreateAuthorUsingGet200ApplicationJSON
	CreateAuthorUsingGet400ApplicationJSONObject *CreateAuthorUsingGet400ApplicationJSON
	CreateAuthorUsingGet401ApplicationJSONObject *CreateAuthorUsingGet401ApplicationJSON
	CreateAuthorUsingGet500ApplicationJSONObject *CreateAuthorUsingGet500ApplicationJSON
}
