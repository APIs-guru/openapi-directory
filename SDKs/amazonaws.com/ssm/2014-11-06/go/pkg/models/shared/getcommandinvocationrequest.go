package shared

type GetCommandInvocationRequest struct {
	CommandID  string  `json:"CommandId"`
	InstanceID string  `json:"InstanceId"`
	PluginName *string `json:"PluginName"`
}
