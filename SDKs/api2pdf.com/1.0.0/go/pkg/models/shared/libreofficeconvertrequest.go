package shared



type LibreOfficeConvertRequest struct {
    FileName *string `json:"fileName,omitempty"`
    InlinePdf *bool `json:"inlinePdf,omitempty"`
    URL string `json:"url"`
    
}

