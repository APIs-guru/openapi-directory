package shared

type ImageToWordsWithLocationResult struct {
	Successful *bool            `json:"Successful,omitempty"`
	Words      []OcrWordElement `json:"Words,omitempty"`
}
