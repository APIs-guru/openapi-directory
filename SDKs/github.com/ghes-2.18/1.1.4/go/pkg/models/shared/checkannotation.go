package shared

// CheckAnnotation
// Check Annotation
type CheckAnnotation struct {
	AnnotationLevel string `json:"annotation_level"`
	BlobHref        string `json:"blob_href"`
	EndColumn       int64  `json:"end_column"`
	EndLine         int64  `json:"end_line"`
	Message         string `json:"message"`
	Path            string `json:"path"`
	RawDetails      string `json:"raw_details"`
	StartColumn     int64  `json:"start_column"`
	StartLine       int64  `json:"start_line"`
	Title           string `json:"title"`
}
