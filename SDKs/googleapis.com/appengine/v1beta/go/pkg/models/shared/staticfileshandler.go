package shared

type StaticFilesHandler struct {
	ApplicationReadable *bool             `json:"applicationReadable"`
	Expiration          *string           `json:"expiration"`
	HTTPHeaders         map[string]string `json:"httpHeaders"`
	MimeType            *string           `json:"mimeType"`
	Path                *string           `json:"path"`
	RequireMatchingFile *bool             `json:"requireMatchingFile"`
	UploadPathRegex     *string           `json:"uploadPathRegex"`
}
