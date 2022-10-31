package shared

type ChromeHTMLToPdfRequest struct {
	FileName  *string                `json:"fileName,omitempty"`
	HTML      string                 `json:"html"`
	InlinePdf *bool                  `json:"inlinePdf,omitempty"`
	Options   *ChromeAdvancedOptions `json:"options,omitempty"`
}
