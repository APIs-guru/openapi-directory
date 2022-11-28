package shared

// ApplicationCodeConfiguration
// Describes code configuration for an application.
type ApplicationCodeConfiguration struct {
	CodeContent     *CodeContent        `json:"CodeContent,omitempty"`
	CodeContentType CodeContentTypeEnum `json:"CodeContentType"`
}
