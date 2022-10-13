package shared

type CreateCustomPluginResponse struct {
	CustomPluginArn   *string                `json:"customPluginArn"`
	CustomPluginState *CustomPluginStateEnum `json:"customPluginState"`
	Name              *string                `json:"name"`
	Revision          *int64                 `json:"revision"`
}
