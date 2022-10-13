package shared

type ChromeHTMLToPdfRequest struct {
	FileName  *string                `json:"fileName"`
	HTML      string                 `json:"html"`
	InlinePdf *bool                  `json:"inlinePdf"`
	Options   *ChromeAdvancedOptions `json:"options"`
}
