package shared

type LocalizedText struct {
	Language *string `json:"language"`
	Text     *string `json:"text"`
}
