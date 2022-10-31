package operations

type GetAttributePoolUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetAttributePoolUsingPostRequest struct {
	QueryParams GetAttributePoolUsingPostQueryParams
}

type GetAttributePoolUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPostResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetAttributePoolUsingPost200ApplicationJSONObject *GetAttributePoolUsingPost200ApplicationJSON
	GetAttributePoolUsingPost400ApplicationJSONObject *GetAttributePoolUsingPost400ApplicationJSON
	GetAttributePoolUsingPost401ApplicationJSONObject *GetAttributePoolUsingPost401ApplicationJSON
	GetAttributePoolUsingPost500ApplicationJSONObject *GetAttributePoolUsingPost500ApplicationJSON
}
