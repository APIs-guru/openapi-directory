package shared

type ValidationErrorErrors struct {
	Code     string       `json:"code"`
	Field    *string      `json:"field"`
	Index    *int64       `json:"index"`
	Message  *string      `json:"message"`
	Resource *string      `json:"resource"`
	Value    *interface{} `json:"value"`
}

type ValidationError struct {
	DocumentationURL string                  `json:"documentation_url"`
	Errors           []ValidationErrorErrors `json:"errors"`
	Message          string                  `json:"message"`
}
