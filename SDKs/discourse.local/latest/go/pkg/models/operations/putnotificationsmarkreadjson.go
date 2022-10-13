package operations

type PutNotificationsMarkReadJSONRequestBody struct {
	ID *int64 `json:"id"`
}

type PutNotificationsMarkReadJSONRequest struct {
	Request *PutNotificationsMarkReadJSONRequestBody `request:"mediaType=application/json"`
}

type PutNotificationsMarkReadJSON200ApplicationJSON struct {
	Success *string `json:"success"`
}

type PutNotificationsMarkReadJSONResponse struct {
	ContentType                                          string
	PutNotificationsMarkReadJSON200ApplicationJSONObject *PutNotificationsMarkReadJSON200ApplicationJSON
	StatusCode                                           int64
}
