package shared

type LibreOfficeConvertRequest struct {
	FileName  *string `json:"fileName"`
	InlinePdf *bool   `json:"inlinePdf"`
	URL       string  `json:"url"`
}
