package shared

// CaptureContentTypeHeader
// <p/>
type CaptureContentTypeHeader struct {
	CsvContentTypes  []string `json:"CsvContentTypes,omitempty"`
	JSONContentTypes []string `json:"JsonContentTypes,omitempty"`
}
