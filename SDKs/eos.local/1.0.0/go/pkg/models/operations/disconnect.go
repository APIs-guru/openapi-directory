package operations

type DisconnectRequestBody struct {
	Endpoint string `json:"endpoint"`
}

type DisconnectRequest struct {
	Request *DisconnectRequestBody `request:"mediaType=application/json"`
}

type DisconnectResponse struct {
	ContentType                        string
	StatusCode                         int64
	Disconnect200ApplicationJSONString *string
}
