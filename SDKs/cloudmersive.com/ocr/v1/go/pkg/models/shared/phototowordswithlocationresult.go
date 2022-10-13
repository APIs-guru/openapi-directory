package shared

type PhotoToWordsWithLocationResult struct {
	DiagnosticImage *string               `json:"DiagnosticImage"`
	Successful      *bool                 `json:"Successful"`
	TextElements    []OcrPhotoTextElement `json:"TextElements"`
}
