package shared

type MergeRequest struct {
	FileName  *string  `json:"fileName"`
	InlinePdf *bool    `json:"inlinePdf"`
	Urls      []string `json:"urls"`
}
