package shared

type MessageResponse struct {
	ApplicationID  string                           `json:"ApplicationId"`
	EndpointResult map[string]EndpointMessageResult `json:"EndpointResult"`
	RequestID      *string                          `json:"RequestId"`
	Result         map[string]MessageResult         `json:"Result"`
}
