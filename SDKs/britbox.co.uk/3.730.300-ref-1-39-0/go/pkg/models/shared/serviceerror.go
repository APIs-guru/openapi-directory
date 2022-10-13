package shared

type ServiceError struct {
	Code    *int32 `json:"code"`
	Message string `json:"message"`
}
