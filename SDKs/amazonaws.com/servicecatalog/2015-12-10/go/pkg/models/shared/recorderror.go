package shared

type RecordError struct {
	Code        *string `json:"Code,omitempty"`
	Description *string `json:"Description,omitempty"`
}
