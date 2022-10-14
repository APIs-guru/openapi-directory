package shared

type FaceDetail struct {
	AgeRange    *AgeRange     `json:"AgeRange,omitempty"`
	Beard       *Beard        `json:"Beard,omitempty"`
	BoundingBox *BoundingBox  `json:"BoundingBox,omitempty"`
	Confidence  *float32      `json:"Confidence,omitempty"`
	Emotions    []Emotion     `json:"Emotions,omitempty"`
	Eyeglasses  *Eyeglasses   `json:"Eyeglasses,omitempty"`
	EyesOpen    *EyeOpen      `json:"EyesOpen,omitempty"`
	Gender      *Gender       `json:"Gender,omitempty"`
	Landmarks   []Landmark    `json:"Landmarks,omitempty"`
	MouthOpen   *MouthOpen    `json:"MouthOpen,omitempty"`
	Mustache    *Mustache     `json:"Mustache,omitempty"`
	Pose        *Pose         `json:"Pose,omitempty"`
	Quality     *ImageQuality `json:"Quality,omitempty"`
	Smile       *Smile        `json:"Smile,omitempty"`
	Sunglasses  *Sunglasses   `json:"Sunglasses,omitempty"`
}
