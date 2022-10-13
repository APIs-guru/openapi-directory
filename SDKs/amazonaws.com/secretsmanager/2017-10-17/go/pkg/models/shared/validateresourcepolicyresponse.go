package shared

type ValidateResourcePolicyResponse struct {
	PolicyValidationPassed *bool                   `json:"PolicyValidationPassed"`
	ValidationErrors       []ValidationErrorsEntry `json:"ValidationErrors"`
}
