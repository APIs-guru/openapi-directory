package shared

type CreateAppImageConfigRequest struct {
	AppImageConfigName       string                    `json:"AppImageConfigName"`
	KernelGatewayImageConfig *KernelGatewayImageConfig `json:"KernelGatewayImageConfig"`
	Tags                     []Tag                     `json:"Tags"`
}
