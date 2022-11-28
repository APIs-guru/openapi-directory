package shared

// ApplicationCodeConfigurationDescription
// Describes code configuration for an application.
type ApplicationCodeConfigurationDescription struct {
	CodeContentDescription *CodeContentDescription `json:"CodeContentDescription,omitempty"`
	CodeContentType        CodeContentTypeEnum     `json:"CodeContentType"`
}
