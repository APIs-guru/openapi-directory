package operations

type GetLastEditedUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetLastEditedUsingPost200ApplicationJSONData struct {
	LastEdited *int64 `json:"lastEdited,omitempty"`
}

type GetLastEditedUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code,omitempty"`
	Data    *GetLastEditedUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                       `json:"message,omitempty"`
}

type GetLastEditedUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetLastEditedUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetLastEditedUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetLastEditedUsingPostRequest struct {
	QueryParams GetLastEditedUsingPostQueryParams
}

type GetLastEditedUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLastEditedUsingPost200ApplicationJSONObject *GetLastEditedUsingPost200ApplicationJSON
	GetLastEditedUsingPost400ApplicationJSONObject *GetLastEditedUsingPost400ApplicationJSON
	GetLastEditedUsingPost401ApplicationJSONObject *GetLastEditedUsingPost401ApplicationJSON
	GetLastEditedUsingPost500ApplicationJSONObject *GetLastEditedUsingPost500ApplicationJSON
}
