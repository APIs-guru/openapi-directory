package operations

type GetAuthorNameUsingGetQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type GetAuthorNameUsingGetRequest struct {
	QueryParams GetAuthorNameUsingGetQueryParams
}

type GetAuthorNameUsingGet200ApplicationJSONDataInfo struct {
	ColorID   *string `json:"colorId,omitempty"`
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	Timestamp *int64  `json:"timestamp,omitempty"`
}

type GetAuthorNameUsingGet200ApplicationJSONData struct {
	Info *GetAuthorNameUsingGet200ApplicationJSONDataInfo `json:"info,omitempty"`
}

type GetAuthorNameUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code,omitempty"`
	Data    *GetAuthorNameUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                      `json:"message,omitempty"`
}

type GetAuthorNameUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAuthorNameUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAuthorNameUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAuthorNameUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetAuthorNameUsingGet200ApplicationJSONObject *GetAuthorNameUsingGet200ApplicationJSON
	GetAuthorNameUsingGet400ApplicationJSONObject *GetAuthorNameUsingGet400ApplicationJSON
	GetAuthorNameUsingGet401ApplicationJSONObject *GetAuthorNameUsingGet401ApplicationJSON
	GetAuthorNameUsingGet500ApplicationJSONObject *GetAuthorNameUsingGet500ApplicationJSON
}
