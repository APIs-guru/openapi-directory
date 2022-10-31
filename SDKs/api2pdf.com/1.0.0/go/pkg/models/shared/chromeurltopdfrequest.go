package shared

type ChromeURLToPdfRequest struct {
	FileName  *string                `json:"fileName,omitempty"`
	InlinePdf *bool                  `json:"inlinePdf,omitempty"`
	Options   *ChromeAdvancedOptions `json:"options,omitempty"`
	URL       string                 `json:"url"`
}
