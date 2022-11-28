package shared

// ViolatedPasswordPolicy
// Violated password policy information
type ViolatedPasswordPolicy struct {
	Message *string `json:"message,omitempty"`
	Name    *string `json:"name,omitempty"`
}
