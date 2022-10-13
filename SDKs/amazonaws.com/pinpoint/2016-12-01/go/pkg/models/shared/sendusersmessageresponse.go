package shared

type SendUsersMessageResponse struct {
	ApplicationID string                                      `json:"ApplicationId"`
	RequestID     *string                                     `json:"RequestId"`
	Result        map[string]map[string]EndpointMessageResult `json:"Result"`
}
