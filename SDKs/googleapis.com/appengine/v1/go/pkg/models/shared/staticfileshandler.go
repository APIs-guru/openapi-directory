package shared

type StaticFilesHandler struct {
	ApplicationReadable *bool             `json:"applicationReadable,omitempty"`
	Expiration          *string           `json:"expiration,omitempty"`
	HTTPHeaders         map[string]string `json:"httpHeaders,omitempty"`
	MimeType            *string           `json:"mimeType,omitempty"`
	Path                *string           `json:"path,omitempty"`
	RequireMatchingFile *bool             `json:"requireMatchingFile,omitempty"`
	UploadPathRegex     *string           `json:"uploadPathRegex,omitempty"`
}
