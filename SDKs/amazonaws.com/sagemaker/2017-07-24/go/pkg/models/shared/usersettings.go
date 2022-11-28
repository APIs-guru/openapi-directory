package shared

// UserSettings
// <p>A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the <code>CreateUserProfile</code> API is called, and as <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called.</p> <p> <code>SecurityGroups</code> is aggregated when specified in both calls. For all other settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code> take precedence over those specified in <code>CreateDomain</code>.</p>
type UserSettings struct {
	ExecutionRole            *string                   `json:"ExecutionRole,omitempty"`
	JupyterServerAppSettings *JupyterServerAppSettings `json:"JupyterServerAppSettings,omitempty"`
	KernelGatewayAppSettings *KernelGatewayAppSettings `json:"KernelGatewayAppSettings,omitempty"`
	SecurityGroups           []string                  `json:"SecurityGroups,omitempty"`
	SharingSettings          *SharingSettings          `json:"SharingSettings,omitempty"`
	TensorBoardAppSettings   *TensorBoardAppSettings   `json:"TensorBoardAppSettings,omitempty"`
}
