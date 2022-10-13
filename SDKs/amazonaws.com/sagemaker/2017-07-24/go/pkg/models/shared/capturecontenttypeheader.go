package shared

type CaptureContentTypeHeader struct {
	CsvContentTypes  []string `json:"CsvContentTypes"`
	JSONContentTypes []string `json:"JsonContentTypes"`
}
