package shared

type WkHTMLToPdfHTMLToPdfRequest struct {
	FileName  *string                     `json:"fileName"`
	HTML      string                      `json:"html"`
	InlinePdf *bool                       `json:"inlinePdf"`
	Options   *WkHTMLToPdfAdvancedOptions `json:"options"`
}
