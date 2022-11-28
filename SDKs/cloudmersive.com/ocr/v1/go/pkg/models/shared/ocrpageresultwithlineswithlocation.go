package shared

// OcrPageResultWithLinesWithLocation
// OCR results of a page, including lines of text and their location
type OcrPageResultWithLinesWithLocation struct {
	Lines      []OcrLineElement `json:"Lines,omitempty"`
	PageNumber *int32           `json:"PageNumber,omitempty"`
	Successful *bool            `json:"Successful,omitempty"`
}
