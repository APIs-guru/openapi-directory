package operations

type PadUsersUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersUsingPostRequest struct {
	QueryParams PadUsersUsingPostQueryParams
}

type PadUsersUsingPost200ApplicationJSONDataPadUsers struct {
	ColorID   *string `json:"colorId,omitempty"`
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	Timestamp *int64  `json:"timestamp,omitempty"`
}

type PadUsersUsingPost200ApplicationJSONData struct {
	PadUsers []PadUsersUsingPost200ApplicationJSONDataPadUsers `json:"padUsers,omitempty"`
}

type PadUsersUsingPost200ApplicationJSON struct {
	Code    *int64                                   `json:"code,omitempty"`
	Data    *PadUsersUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                  `json:"message,omitempty"`
}

type PadUsersUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersUsingPostResponse struct {
	ContentType                               string
	StatusCode                                int64
	PadUsersUsingPost200ApplicationJSONObject *PadUsersUsingPost200ApplicationJSON
	PadUsersUsingPost400ApplicationJSONObject *PadUsersUsingPost400ApplicationJSON
	PadUsersUsingPost401ApplicationJSONObject *PadUsersUsingPost401ApplicationJSON
	PadUsersUsingPost500ApplicationJSONObject *PadUsersUsingPost500ApplicationJSON
}
