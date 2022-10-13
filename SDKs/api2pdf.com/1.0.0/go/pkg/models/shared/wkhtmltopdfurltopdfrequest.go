package shared

type WkHTMLToPdfURLToPdfRequest struct {
	FileName  *string                     `json:"fileName"`
	InlinePdf *bool                       `json:"inlinePdf"`
	Options   *WkHTMLToPdfAdvancedOptions `json:"options"`
	URL       string                      `json:"url"`
}
