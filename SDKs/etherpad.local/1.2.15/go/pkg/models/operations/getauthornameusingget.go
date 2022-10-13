package operations

type GetAuthorNameUsingGetQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type GetAuthorNameUsingGetRequest struct {
	QueryParams GetAuthorNameUsingGetQueryParams
}

type GetAuthorNameUsingGet200ApplicationJSONDataInfo struct {
	ColorID   *string `json:"colorId"`
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	Timestamp *int64  `json:"timestamp"`
}

type GetAuthorNameUsingGet200ApplicationJSONData struct {
	Info *GetAuthorNameUsingGet200ApplicationJSONDataInfo `json:"info"`
}

type GetAuthorNameUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code"`
	Data    *GetAuthorNameUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                      `json:"message"`
}

type GetAuthorNameUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAuthorNameUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAuthorNameUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAuthorNameUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetAuthorNameUsingGet200ApplicationJSONObject *GetAuthorNameUsingGet200ApplicationJSON
	GetAuthorNameUsingGet400ApplicationJSONObject *GetAuthorNameUsingGet400ApplicationJSON
	GetAuthorNameUsingGet401ApplicationJSONObject *GetAuthorNameUsingGet401ApplicationJSON
	GetAuthorNameUsingGet500ApplicationJSONObject *GetAuthorNameUsingGet500ApplicationJSON
}
