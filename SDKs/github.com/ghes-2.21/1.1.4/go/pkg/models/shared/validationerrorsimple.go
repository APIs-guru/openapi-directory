package shared

// ValidationErrorSimple
// Validation Error Simple
type ValidationErrorSimple struct {
	DocumentationURL string   `json:"documentation_url"`
	Errors           []string `json:"errors,omitempty"`
	Message          string   `json:"message"`
}
