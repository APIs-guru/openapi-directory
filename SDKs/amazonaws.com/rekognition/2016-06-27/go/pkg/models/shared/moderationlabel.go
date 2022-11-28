package shared

// ModerationLabel
// Provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition Developer Guide.
type ModerationLabel struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Name       *string  `json:"Name,omitempty"`
	ParentName *string  `json:"ParentName,omitempty"`
}
