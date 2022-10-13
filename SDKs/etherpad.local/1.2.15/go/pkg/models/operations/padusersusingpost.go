package operations

type PadUsersUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersUsingPostRequest struct {
	QueryParams PadUsersUsingPostQueryParams
}

type PadUsersUsingPost200ApplicationJSONDataPadUsers struct {
	ColorID   *string `json:"colorId"`
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	Timestamp *int64  `json:"timestamp"`
}

type PadUsersUsingPost200ApplicationJSONData struct {
	PadUsers []PadUsersUsingPost200ApplicationJSONDataPadUsers `json:"padUsers"`
}

type PadUsersUsingPost200ApplicationJSON struct {
	Code    *int64                                   `json:"code"`
	Data    *PadUsersUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                  `json:"message"`
}

type PadUsersUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersUsingPostResponse struct {
	ContentType                               string
	StatusCode                                int64
	PadUsersUsingPost200ApplicationJSONObject *PadUsersUsingPost200ApplicationJSON
	PadUsersUsingPost400ApplicationJSONObject *PadUsersUsingPost400ApplicationJSON
	PadUsersUsingPost401ApplicationJSONObject *PadUsersUsingPost401ApplicationJSON
	PadUsersUsingPost500ApplicationJSONObject *PadUsersUsingPost500ApplicationJSON
}
