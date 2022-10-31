package shared

type CreateAppImageConfigRequest struct {
	AppImageConfigName       string                    `json:"AppImageConfigName"`
	KernelGatewayImageConfig *KernelGatewayImageConfig `json:"KernelGatewayImageConfig,omitempty"`
	Tags                     []Tag                     `json:"Tags,omitempty"`
}
