package shared

// SendUsersMessageResponse
// Provides information about which users and endpoints a message was sent to.
type SendUsersMessageResponse struct {
	ApplicationID string                                      `json:"ApplicationId"`
	RequestID     *string                                     `json:"RequestId,omitempty"`
	Result        map[string]map[string]EndpointMessageResult `json:"Result,omitempty"`
}
