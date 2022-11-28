package shared

// ConfigInput
// Available configurations to provision an Instance.
type ConfigInput struct {
	CmekKeyName *string `json:"cmekKeyName,omitempty"`
}
