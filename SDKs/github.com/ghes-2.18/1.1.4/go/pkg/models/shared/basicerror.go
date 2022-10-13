package shared

type BasicError struct {
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
	Status           *string `json:"status"`
	URL              *string `json:"url"`
}
