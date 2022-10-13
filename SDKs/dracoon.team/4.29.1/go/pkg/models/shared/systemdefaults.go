package shared

type SystemDefaults struct {
	DownloadShareDefaultExpirationPeriod *int32  `json:"downloadShareDefaultExpirationPeriod"`
	FileDefaultExpirationPeriod          *int32  `json:"fileDefaultExpirationPeriod"`
	HideLoginInputFields                 *bool   `json:"hideLoginInputFields"`
	LanguageDefault                      *string `json:"languageDefault"`
	NonmemberViewerDefault               *bool   `json:"nonmemberViewerDefault"`
	UploadShareDefaultExpirationPeriod   *int32  `json:"uploadShareDefaultExpirationPeriod"`
}
