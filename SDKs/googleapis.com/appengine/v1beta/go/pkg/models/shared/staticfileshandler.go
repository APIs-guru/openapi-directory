package shared

// StaticFilesHandler
// Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
type StaticFilesHandler struct {
	ApplicationReadable *bool             `json:"applicationReadable,omitempty"`
	Expiration          *string           `json:"expiration,omitempty"`
	HTTPHeaders         map[string]string `json:"httpHeaders,omitempty"`
	MimeType            *string           `json:"mimeType,omitempty"`
	Path                *string           `json:"path,omitempty"`
	RequireMatchingFile *bool             `json:"requireMatchingFile,omitempty"`
	UploadPathRegex     *string           `json:"uploadPathRegex,omitempty"`
}
