package shared

type OcrPageResultWithWordsWithLocation struct {
	PageNumber *int32           `json:"PageNumber"`
	Successful *bool            `json:"Successful"`
	Words      []OcrWordElement `json:"Words"`
}
