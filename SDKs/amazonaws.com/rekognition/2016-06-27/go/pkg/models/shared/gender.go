package shared

type Gender struct {
	Confidence *float32        `json:"Confidence"`
	Value      *GenderTypeEnum `json:"Value"`
}
