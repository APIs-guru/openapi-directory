package shared

type BatchGetAmpUrlsResponse struct {
	AmpUrls   []AmpURL      `json:"ampUrls"`
	URLErrors []AmpURLError `json:"urlErrors"`
}
