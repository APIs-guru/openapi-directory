package shared

type TextDetection struct {
	Confidence   *float32       `json:"Confidence,omitempty"`
	DetectedText *string        `json:"DetectedText,omitempty"`
	Geometry     *Geometry      `json:"Geometry,omitempty"`
	ID           *int64         `json:"Id,omitempty"`
	ParentID     *int64         `json:"ParentId,omitempty"`
	Type         *TextTypesEnum `json:"Type,omitempty"`
}
