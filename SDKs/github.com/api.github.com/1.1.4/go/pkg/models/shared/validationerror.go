package shared

type ValidationErrorErrors struct {
	Code     string       `json:"code"`
	Field    *string      `json:"field,omitempty"`
	Index    *int64       `json:"index,omitempty"`
	Message  *string      `json:"message,omitempty"`
	Resource *string      `json:"resource,omitempty"`
	Value    *interface{} `json:"value,omitempty"`
}

type ValidationError struct {
	DocumentationURL string                  `json:"documentation_url"`
	Errors           []ValidationErrorErrors `json:"errors,omitempty"`
	Message          string                  `json:"message"`
}
