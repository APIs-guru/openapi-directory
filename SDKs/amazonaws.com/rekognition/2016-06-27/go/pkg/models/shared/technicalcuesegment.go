package shared

type TechnicalCueSegment struct {
	Confidence *float32              `json:"Confidence"`
	Type       *TechnicalCueTypeEnum `json:"Type"`
}
