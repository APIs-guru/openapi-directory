package operations

type CreateAuthorIfNotExistsForUsingGetQueryParams struct {
	AuthorMapper *string `queryParam:"style=form,explode=true,name=authorMapper"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
}

type CreateAuthorIfNotExistsForUsingGetRequest struct {
	QueryParams CreateAuthorIfNotExistsForUsingGetQueryParams
}

type CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData struct {
	AuthorID *string `json:"authorID"`
}

type CreateAuthorIfNotExistsForUsingGet200ApplicationJSON struct {
	Code    *int64                                                    `json:"code"`
	Data    *CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                                   `json:"message"`
}

type CreateAuthorIfNotExistsForUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorIfNotExistsForUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorIfNotExistsForUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorIfNotExistsForUsingGetResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	CreateAuthorIfNotExistsForUsingGet200ApplicationJSONObject *CreateAuthorIfNotExistsForUsingGet200ApplicationJSON
	CreateAuthorIfNotExistsForUsingGet400ApplicationJSONObject *CreateAuthorIfNotExistsForUsingGet400ApplicationJSON
	CreateAuthorIfNotExistsForUsingGet401ApplicationJSONObject *CreateAuthorIfNotExistsForUsingGet401ApplicationJSON
	CreateAuthorIfNotExistsForUsingGet500ApplicationJSONObject *CreateAuthorIfNotExistsForUsingGet500ApplicationJSON
}
