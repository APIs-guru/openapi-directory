package shared

type BasicError struct {
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}
