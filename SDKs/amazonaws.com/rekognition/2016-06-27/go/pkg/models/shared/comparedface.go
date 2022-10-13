package shared

type ComparedFace struct {
	BoundingBox *BoundingBox  `json:"BoundingBox"`
	Confidence  *float32      `json:"Confidence"`
	Emotions    []Emotion     `json:"Emotions"`
	Landmarks   []Landmark    `json:"Landmarks"`
	Pose        *Pose         `json:"Pose"`
	Quality     *ImageQuality `json:"Quality"`
	Smile       *Smile        `json:"Smile"`
}
