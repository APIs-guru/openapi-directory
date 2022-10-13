package shared

type TextDetection struct {
	Confidence   *float32       `json:"Confidence"`
	DetectedText *string        `json:"DetectedText"`
	Geometry     *Geometry      `json:"Geometry"`
	ID           *int64         `json:"Id"`
	ParentID     *int64         `json:"ParentId"`
	Type         *TextTypesEnum `json:"Type"`
}
