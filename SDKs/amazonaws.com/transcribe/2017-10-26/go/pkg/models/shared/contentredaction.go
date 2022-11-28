package shared

// ContentRedaction
// Settings for content redaction within a transcription job.
type ContentRedaction struct {
	RedactionOutput RedactionOutputEnum `json:"RedactionOutput"`
	RedactionType   RedactionTypeEnum   `json:"RedactionType"`
}
