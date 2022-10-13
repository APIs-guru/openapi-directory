package operations

type QuittungPrepareRequestBody struct {
	Account *string `json:"account"`
}

type QuittungPrepareRequest struct {
	Request *QuittungPrepareRequestBody `request:"mediaType=application/json"`
}

type QuittungPrepareResponse struct {
	ContentType                             string
	StatusCode                              int64
	QuittungPrepare200ApplicationJSONString *string
}
