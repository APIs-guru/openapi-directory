package shared

type ImageToLinesWithLocationResult struct {
	Lines      []OcrLineElement `json:"Lines"`
	Successful *bool            `json:"Successful"`
}
