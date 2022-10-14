package shared

type TranslateTextRequest struct {
	SourceLanguageCode string   `json:"SourceLanguageCode"`
	TargetLanguageCode string   `json:"TargetLanguageCode"`
	TerminologyNames   []string `json:"TerminologyNames,omitempty"`
	Text               string   `json:"Text"`
}
