package shared

type ImageToLinesWithLocationResult struct {
	Lines      []OcrLineElement `json:"Lines,omitempty"`
	Successful *bool            `json:"Successful,omitempty"`
}
