package shared

type Emotion struct {
	Confidence *float32         `json:"Confidence"`
	Type       *EmotionNameEnum `json:"Type"`
}
