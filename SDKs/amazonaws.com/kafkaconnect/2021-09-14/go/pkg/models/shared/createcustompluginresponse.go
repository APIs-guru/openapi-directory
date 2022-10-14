package shared

type CreateCustomPluginResponse struct {
	CustomPluginArn   *string                `json:"customPluginArn,omitempty"`
	CustomPluginState *CustomPluginStateEnum `json:"customPluginState,omitempty"`
	Name              *string                `json:"name,omitempty"`
	Revision          *int64                 `json:"revision,omitempty"`
}
