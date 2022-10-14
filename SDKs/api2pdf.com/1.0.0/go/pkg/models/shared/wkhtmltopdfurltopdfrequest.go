package shared

type WkHTMLToPdfURLToPdfRequest struct {
	FileName  *string                     `json:"fileName,omitempty"`
	InlinePdf *bool                       `json:"inlinePdf,omitempty"`
	Options   *WkHTMLToPdfAdvancedOptions `json:"options,omitempty"`
	URL       string                      `json:"url"`
}
