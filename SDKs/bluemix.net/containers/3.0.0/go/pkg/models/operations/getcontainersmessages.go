package operations

type GetContainersMessagesHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetContainersMessagesRequest struct {
	Headers GetContainersMessagesHeaders
}

type GetContainersMessages200ApplicationJSON struct {
	CreatedDate *string `json:"created_date"`
	Message     *string `json:"message"`
}

type GetContainersMessagesResponse struct {
	ContentType                                   string
	GetContainersMessages200ApplicationJSONObject *GetContainersMessages200ApplicationJSON
	StatusCode                                    int64
}
