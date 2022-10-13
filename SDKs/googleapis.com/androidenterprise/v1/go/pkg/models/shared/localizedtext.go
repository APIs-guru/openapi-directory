package shared

type LocalizedText struct {
	Locale *string `json:"locale"`
	Text   *string `json:"text"`
}
