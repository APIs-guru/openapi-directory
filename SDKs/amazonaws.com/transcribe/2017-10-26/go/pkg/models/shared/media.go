package shared

// Media
// Describes the input media file in a transcription request.
type Media struct {
	MediaFileURI         *string `json:"MediaFileUri,omitempty"`
	RedactedMediaFileURI *string `json:"RedactedMediaFileUri,omitempty"`
}
