package shared

// Emotion
// The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.
type Emotion struct {
	Confidence *float32         `json:"Confidence,omitempty"`
	Type       *EmotionNameEnum `json:"Type,omitempty"`
}
