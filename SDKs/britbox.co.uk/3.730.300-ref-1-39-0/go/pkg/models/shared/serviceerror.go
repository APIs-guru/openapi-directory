package shared

type ServiceError struct {
	Code    *int32 `json:"code,omitempty"`
	Message string `json:"message"`
}
