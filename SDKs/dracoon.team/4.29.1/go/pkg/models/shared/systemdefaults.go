package shared

// SystemDefaults
// System defaults
type SystemDefaults struct {
	DownloadShareDefaultExpirationPeriod *int32  `json:"downloadShareDefaultExpirationPeriod,omitempty"`
	FileDefaultExpirationPeriod          *int32  `json:"fileDefaultExpirationPeriod,omitempty"`
	HideLoginInputFields                 *bool   `json:"hideLoginInputFields,omitempty"`
	LanguageDefault                      *string `json:"languageDefault,omitempty"`
	NonmemberViewerDefault               *bool   `json:"nonmemberViewerDefault,omitempty"`
	UploadShareDefaultExpirationPeriod   *int32  `json:"uploadShareDefaultExpirationPeriod,omitempty"`
}
