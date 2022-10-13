package shared

type UserSettings struct {
	ExecutionRole            *string                   `json:"ExecutionRole"`
	JupyterServerAppSettings *JupyterServerAppSettings `json:"JupyterServerAppSettings"`
	KernelGatewayAppSettings *KernelGatewayAppSettings `json:"KernelGatewayAppSettings"`
	SecurityGroups           []string                  `json:"SecurityGroups"`
	SharingSettings          *SharingSettings          `json:"SharingSettings"`
	TensorBoardAppSettings   *TensorBoardAppSettings   `json:"TensorBoardAppSettings"`
}
