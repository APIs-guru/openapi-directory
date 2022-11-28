package shared

// Transcript
// Identifies the location of a transcription.
type Transcript struct {
	RedactedTranscriptFileURI *string `json:"RedactedTranscriptFileUri,omitempty"`
	TranscriptFileURI         *string `json:"TranscriptFileUri,omitempty"`
}
