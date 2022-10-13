package operations

type PadUsersCountUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersCountUsingPostRequest struct {
	QueryParams PadUsersCountUsingPostQueryParams
}

type PadUsersCountUsingPost200ApplicationJSONData struct {
	PadUsersCount *int64 `json:"padUsersCount"`
}

type PadUsersCountUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code"`
	Data    *PadUsersCountUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                       `json:"message"`
}

type PadUsersCountUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersCountUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersCountUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type PadUsersCountUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	PadUsersCountUsingPost200ApplicationJSONObject *PadUsersCountUsingPost200ApplicationJSON
	PadUsersCountUsingPost400ApplicationJSONObject *PadUsersCountUsingPost400ApplicationJSON
	PadUsersCountUsingPost401ApplicationJSONObject *PadUsersCountUsingPost401ApplicationJSON
	PadUsersCountUsingPost500ApplicationJSONObject *PadUsersCountUsingPost500ApplicationJSON
}
