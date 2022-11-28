package shared

// OcrPageResultWithWordsWithLocation
// OCR results of a page, including words of text and their location
type OcrPageResultWithWordsWithLocation struct {
	PageNumber *int32           `json:"PageNumber,omitempty"`
	Successful *bool            `json:"Successful,omitempty"`
	Words      []OcrWordElement `json:"Words,omitempty"`
}
