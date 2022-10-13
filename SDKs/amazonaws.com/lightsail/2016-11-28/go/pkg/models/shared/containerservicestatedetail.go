package shared

type ContainerServiceStateDetail struct {
	Code    *ContainerServiceStateDetailCodeEnum `json:"code"`
	Message *string                              `json:"message"`
}
