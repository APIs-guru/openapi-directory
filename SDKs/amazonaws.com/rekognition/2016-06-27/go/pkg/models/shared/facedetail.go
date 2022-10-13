package shared

type FaceDetail struct {
	AgeRange    *AgeRange     `json:"AgeRange"`
	Beard       *Beard        `json:"Beard"`
	BoundingBox *BoundingBox  `json:"BoundingBox"`
	Confidence  *float32      `json:"Confidence"`
	Emotions    []Emotion     `json:"Emotions"`
	Eyeglasses  *Eyeglasses   `json:"Eyeglasses"`
	EyesOpen    *EyeOpen      `json:"EyesOpen"`
	Gender      *Gender       `json:"Gender"`
	Landmarks   []Landmark    `json:"Landmarks"`
	MouthOpen   *MouthOpen    `json:"MouthOpen"`
	Mustache    *Mustache     `json:"Mustache"`
	Pose        *Pose         `json:"Pose"`
	Quality     *ImageQuality `json:"Quality"`
	Smile       *Smile        `json:"Smile"`
	Sunglasses  *Sunglasses   `json:"Sunglasses"`
}
