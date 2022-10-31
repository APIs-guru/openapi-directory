package shared

type ComparedFace struct {
	BoundingBox *BoundingBox  `json:"BoundingBox,omitempty"`
	Confidence  *float32      `json:"Confidence,omitempty"`
	Emotions    []Emotion     `json:"Emotions,omitempty"`
	Landmarks   []Landmark    `json:"Landmarks,omitempty"`
	Pose        *Pose         `json:"Pose,omitempty"`
	Quality     *ImageQuality `json:"Quality,omitempty"`
	Smile       *Smile        `json:"Smile,omitempty"`
}
