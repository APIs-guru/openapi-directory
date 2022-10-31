package shared

type ModerationLabel struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Name       *string  `json:"Name,omitempty"`
	ParentName *string  `json:"ParentName,omitempty"`
}
