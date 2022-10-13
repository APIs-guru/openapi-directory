package operations

type GetPublicStatusUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetPublicStatusUsingPostRequest struct {
	QueryParams GetPublicStatusUsingPostQueryParams
}

type GetPublicStatusUsingPost200ApplicationJSONData struct {
	PublicStatus *bool `json:"publicStatus"`
}

type GetPublicStatusUsingPost200ApplicationJSON struct {
	Code    *int64                                          `json:"code"`
	Data    *GetPublicStatusUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                         `json:"message"`
}

type GetPublicStatusUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetPublicStatusUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetPublicStatusUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetPublicStatusUsingPostResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetPublicStatusUsingPost200ApplicationJSONObject *GetPublicStatusUsingPost200ApplicationJSON
	GetPublicStatusUsingPost400ApplicationJSONObject *GetPublicStatusUsingPost400ApplicationJSON
	GetPublicStatusUsingPost401ApplicationJSONObject *GetPublicStatusUsingPost401ApplicationJSON
	GetPublicStatusUsingPost500ApplicationJSONObject *GetPublicStatusUsingPost500ApplicationJSON
}
