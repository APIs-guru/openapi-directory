package shared

type RegisterContainerImageRequest struct {
	Digest      string `json:"digest"`
	Label       string `json:"label"`
	ServiceName string `json:"serviceName"`
}
