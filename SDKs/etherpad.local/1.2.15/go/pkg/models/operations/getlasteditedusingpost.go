package operations

type GetLastEditedUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetLastEditedUsingPostRequest struct {
	QueryParams GetLastEditedUsingPostQueryParams
}

type GetLastEditedUsingPost200ApplicationJSONData struct {
	LastEdited *int64 `json:"lastEdited"`
}

type GetLastEditedUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code"`
	Data    *GetLastEditedUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                       `json:"message"`
}

type GetLastEditedUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetLastEditedUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetLastEditedUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetLastEditedUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLastEditedUsingPost200ApplicationJSONObject *GetLastEditedUsingPost200ApplicationJSON
	GetLastEditedUsingPost400ApplicationJSONObject *GetLastEditedUsingPost400ApplicationJSON
	GetLastEditedUsingPost401ApplicationJSONObject *GetLastEditedUsingPost401ApplicationJSON
	GetLastEditedUsingPost500ApplicationJSONObject *GetLastEditedUsingPost500ApplicationJSON
}
