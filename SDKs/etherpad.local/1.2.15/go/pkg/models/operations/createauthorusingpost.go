package operations

type CreateAuthorUsingPostQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type CreateAuthorUsingPostRequest struct {
	QueryParams CreateAuthorUsingPostQueryParams
}

type CreateAuthorUsingPost200ApplicationJSONData struct {
	AuthorID *string `json:"authorID"`
}

type CreateAuthorUsingPost200ApplicationJSON struct {
	Code    *int64                                       `json:"code"`
	Data    *CreateAuthorUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                      `json:"message"`
}

type CreateAuthorUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateAuthorUsingPostResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	CreateAuthorUsingPost200ApplicationJSONObject *CreateAuthorUsingPost200ApplicationJSON
	CreateAuthorUsingPost400ApplicationJSONObject *CreateAuthorUsingPost400ApplicationJSON
	CreateAuthorUsingPost401ApplicationJSONObject *CreateAuthorUsingPost401ApplicationJSON
	CreateAuthorUsingPost500ApplicationJSONObject *CreateAuthorUsingPost500ApplicationJSON
}
