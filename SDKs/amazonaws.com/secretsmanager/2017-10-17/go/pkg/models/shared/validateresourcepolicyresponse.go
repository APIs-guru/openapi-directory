package shared

type ValidateResourcePolicyResponse struct {
	PolicyValidationPassed *bool                   `json:"PolicyValidationPassed,omitempty"`
	ValidationErrors       []ValidationErrorsEntry `json:"ValidationErrors,omitempty"`
}
