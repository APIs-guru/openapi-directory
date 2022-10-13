package shared

type UpdateSystemDefaults struct {
	DownloadShareDefaultExpirationPeriod *int32  `json:"downloadShareDefaultExpirationPeriod"`
	FileDefaultExpirationPeriod          *int32  `json:"fileDefaultExpirationPeriod"`
	LanguageDefault                      *string `json:"languageDefault"`
	NonmemberViewerDefault               *bool   `json:"nonmemberViewerDefault"`
	UploadShareDefaultExpirationPeriod   *int32  `json:"uploadShareDefaultExpirationPeriod"`
}
