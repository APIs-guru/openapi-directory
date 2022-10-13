package shared

type OcrPageResultWithLinesWithLocation struct {
	Lines      []OcrLineElement `json:"Lines"`
	PageNumber *int32           `json:"PageNumber"`
	Successful *bool            `json:"Successful"`
}
