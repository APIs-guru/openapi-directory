package shared



type UserSettings struct {
    ExecutionRole *string `json:"ExecutionRole,omitempty"`
    JupyterServerAppSettings *JupyterServerAppSettings `json:"JupyterServerAppSettings,omitempty"`
    KernelGatewayAppSettings *KernelGatewayAppSettings `json:"KernelGatewayAppSettings,omitempty"`
    SecurityGroups []string `json:"SecurityGroups,omitempty"`
    SharingSettings *SharingSettings `json:"SharingSettings,omitempty"`
    TensorBoardAppSettings *TensorBoardAppSettings `json:"TensorBoardAppSettings,omitempty"`
    
}

