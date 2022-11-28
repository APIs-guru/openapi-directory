package shared

// ContainerServiceStateDetail
// Describes the current state of a container service.
type ContainerServiceStateDetail struct {
	Code    *ContainerServiceStateDetailCodeEnum `json:"code,omitempty"`
	Message *string                              `json:"message,omitempty"`
}
