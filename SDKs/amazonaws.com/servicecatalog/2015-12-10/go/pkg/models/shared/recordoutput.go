package shared

type RecordOutput struct {
	Description *string `json:"Description,omitempty"`
	OutputKey   *string `json:"OutputKey,omitempty"`
	OutputValue *string `json:"OutputValue,omitempty"`
}
