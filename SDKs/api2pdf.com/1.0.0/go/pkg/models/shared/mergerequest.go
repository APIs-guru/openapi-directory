package shared

type MergeRequest struct {
	FileName  *string  `json:"fileName,omitempty"`
	InlinePdf *bool    `json:"inlinePdf,omitempty"`
	Urls      []string `json:"urls"`
}
