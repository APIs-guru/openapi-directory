package shared

// MessageResponse
// Provides information about the results of a request to send a message to an endpoint address.
type MessageResponse struct {
	ApplicationID  string                           `json:"ApplicationId"`
	EndpointResult map[string]EndpointMessageResult `json:"EndpointResult,omitempty"`
	RequestID      *string                          `json:"RequestId,omitempty"`
	Result         map[string]MessageResult         `json:"Result,omitempty"`
}
