package operations

type SetPublicStatusUsingPostQueryParams struct {
	PadID        *string `queryParam:"style=form,explode=true,name=padID"`
	PublicStatus *string `queryParam:"style=form,explode=true,name=publicStatus"`
}

type SetPublicStatusUsingPostRequest struct {
	QueryParams SetPublicStatusUsingPostQueryParams
}

type SetPublicStatusUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type SetPublicStatusUsingPostResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	SetPublicStatusUsingPost200ApplicationJSONObject *SetPublicStatusUsingPost200ApplicationJSON
	SetPublicStatusUsingPost400ApplicationJSONObject *SetPublicStatusUsingPost400ApplicationJSON
	SetPublicStatusUsingPost401ApplicationJSONObject *SetPublicStatusUsingPost401ApplicationJSON
	SetPublicStatusUsingPost500ApplicationJSONObject *SetPublicStatusUsingPost500ApplicationJSON
}
