package shared

// ModelSettings
// The object used to call your custom language model to your transcription job.
type ModelSettings struct {
	LanguageModelName *string `json:"LanguageModelName,omitempty"`
}
