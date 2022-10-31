package shared



type WkHTMLToPdfHTMLToPdfRequest struct {
    FileName *string `json:"fileName,omitempty"`
    HTML string `json:"html"`
    InlinePdf *bool `json:"inlinePdf,omitempty"`
    Options *WkHTMLToPdfAdvancedOptions `json:"options,omitempty"`
    
}

