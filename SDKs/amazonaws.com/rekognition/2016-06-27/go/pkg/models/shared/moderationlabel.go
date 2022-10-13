package shared

type ModerationLabel struct {
	Confidence *float32 `json:"Confidence"`
	Name       *string  `json:"Name"`
	ParentName *string  `json:"ParentName"`
}
