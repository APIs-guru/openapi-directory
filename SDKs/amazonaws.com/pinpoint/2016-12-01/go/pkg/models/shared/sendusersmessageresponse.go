package shared

type SendUsersMessageResponse struct {
	ApplicationID string                                      `json:"ApplicationId"`
	RequestID     *string                                     `json:"RequestId,omitempty"`
	Result        map[string]map[string]EndpointMessageResult `json:"Result,omitempty"`
}
