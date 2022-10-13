package operations

type GetAuthorNameUsingPostQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type GetAuthorNameUsingPostRequest struct {
	QueryParams GetAuthorNameUsingPostQueryParams
}

type GetAuthorNameUsingPost200ApplicationJSONDataInfo struct {
	ColorID   *string `json:"colorId"`
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	Timestamp *int64  `json:"timestamp"`
}

type GetAuthorNameUsingPost200ApplicationJSONData struct {
	Info *GetAuthorNameUsingPost200ApplicationJSONDataInfo `json:"info"`
}

type GetAuthorNameUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code"`
	Data    *GetAuthorNameUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                       `json:"message"`
}

type GetAuthorNameUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAuthorNameUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAuthorNameUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetAuthorNameUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetAuthorNameUsingPost200ApplicationJSONObject *GetAuthorNameUsingPost200ApplicationJSON
	GetAuthorNameUsingPost400ApplicationJSONObject *GetAuthorNameUsingPost400ApplicationJSON
	GetAuthorNameUsingPost401ApplicationJSONObject *GetAuthorNameUsingPost401ApplicationJSON
	GetAuthorNameUsingPost500ApplicationJSONObject *GetAuthorNameUsingPost500ApplicationJSON
}
