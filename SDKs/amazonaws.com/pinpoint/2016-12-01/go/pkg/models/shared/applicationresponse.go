package shared

// ApplicationResponse
// Provides information about an application.
type ApplicationResponse struct {
	Arn  string            `json:"Arn"`
	ID   string            `json:"Id"`
	Name string            `json:"Name"`
	Tags map[string]string `json:"tags,omitempty"`
}
