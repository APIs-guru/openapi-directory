package shared

type DeleteContainerImageRequest struct {
	Image       string `json:"image"`
	ServiceName string `json:"serviceName"`
}
