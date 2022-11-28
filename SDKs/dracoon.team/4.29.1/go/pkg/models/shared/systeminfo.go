package shared

// SystemInfo
// System information (default language and authentication methods)
type SystemInfo struct {
	AuthMethods           []AuthMethod `json:"authMethods"`
	HideLoginInputFields  bool         `json:"hideLoginInputFields"`
	LanguageDefault       string       `json:"languageDefault"`
	S3EnforceDirectUpload bool         `json:"s3EnforceDirectUpload"`
	S3Hosts               []string     `json:"s3Hosts"`
	UseS3Storage          bool         `json:"useS3Storage"`
}
