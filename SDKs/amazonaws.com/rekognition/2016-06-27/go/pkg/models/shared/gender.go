package shared

type Gender struct {
	Confidence *float32        `json:"Confidence,omitempty"`
	Value      *GenderTypeEnum `json:"Value,omitempty"`
}
