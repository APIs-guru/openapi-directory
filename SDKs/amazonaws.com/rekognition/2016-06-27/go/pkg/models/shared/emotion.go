package shared

type Emotion struct {
	Confidence *float32         `json:"Confidence,omitempty"`
	Type       *EmotionNameEnum `json:"Type,omitempty"`
}
