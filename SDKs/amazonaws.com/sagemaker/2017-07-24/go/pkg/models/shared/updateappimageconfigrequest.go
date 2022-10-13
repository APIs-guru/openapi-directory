package shared

type UpdateAppImageConfigRequest struct {
	AppImageConfigName       string                    `json:"AppImageConfigName"`
	KernelGatewayImageConfig *KernelGatewayImageConfig `json:"KernelGatewayImageConfig"`
}
