package shared

type ChromeURLToPdfRequest struct {
	FileName  *string                `json:"fileName"`
	InlinePdf *bool                  `json:"inlinePdf"`
	Options   *ChromeAdvancedOptions `json:"options"`
	URL       string                 `json:"url"`
}
