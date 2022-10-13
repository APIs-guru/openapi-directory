package shared

type SupportedConfiguration struct {
	DefaultValue *string `json:"defaultValue"`
	Property     *string `json:"property"`
	Usage        *string `json:"usage"`
}
