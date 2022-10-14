package shared

type AuthenticationErrorStatusEnum string

const (
	AuthenticationErrorStatusEnumError AuthenticationErrorStatusEnum = "error"
)

type AuthenticationError struct {
	Error  string                         `json:"error"`
	Status *AuthenticationErrorStatusEnum `json:"status,omitempty"`
}
