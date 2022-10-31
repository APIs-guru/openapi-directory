package shared

type ViolatedPasswordPolicy struct {
	Message *string `json:"message,omitempty"`
	Name    *string `json:"name,omitempty"`
}
