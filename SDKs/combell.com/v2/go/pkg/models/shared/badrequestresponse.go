package shared

type BadRequestResponse struct {
	ValidationErrors []ValidationErrorMessage `json:"validation_errors,omitempty"`
}
