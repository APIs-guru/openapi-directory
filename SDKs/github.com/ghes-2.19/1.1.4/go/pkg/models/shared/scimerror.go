package shared

type ScimError struct {
	Detail           *string  `json:"detail"`
	DocumentationURL *string  `json:"documentation_url"`
	Message          *string  `json:"message"`
	Schemas          []string `json:"schemas"`
	ScimType         *string  `json:"scimType"`
	Status           *int64   `json:"status"`
}
