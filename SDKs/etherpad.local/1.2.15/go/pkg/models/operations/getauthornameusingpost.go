package operations

type GetAuthorNameUsingPostQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type GetAuthorNameUsingPost200ApplicationJSONDataInfo struct {
	ColorID   *string `json:"colorId,omitempty"`
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	Timestamp *int64  `json:"timestamp,omitempty"`
}

type GetAuthorNameUsingPost200ApplicationJSONData struct {
	Info *GetAuthorNameUsingPost200ApplicationJSONDataInfo `json:"info,omitempty"`
}

type GetAuthorNameUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code,omitempty"`
	Data    *GetAuthorNameUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                       `json:"message,omitempty"`
}

type GetAuthorNameUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAuthorNameUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAuthorNameUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAuthorNameUsingPostRequest struct {
	QueryParams GetAuthorNameUsingPostQueryParams
}

type GetAuthorNameUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetAuthorNameUsingPost200ApplicationJSONObject *GetAuthorNameUsingPost200ApplicationJSON
	GetAuthorNameUsingPost400ApplicationJSONObject *GetAuthorNameUsingPost400ApplicationJSON
	GetAuthorNameUsingPost401ApplicationJSONObject *GetAuthorNameUsingPost401ApplicationJSON
	GetAuthorNameUsingPost500ApplicationJSONObject *GetAuthorNameUsingPost500ApplicationJSON
}
