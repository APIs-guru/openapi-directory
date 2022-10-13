package shared

type ImageToWordsWithLocationResult struct {
	Successful *bool            `json:"Successful"`
	Words      []OcrWordElement `json:"Words"`
}
