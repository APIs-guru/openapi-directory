package shared

type PromptSpecification struct {
	AllowInterrupt *bool          `json:"allowInterrupt,omitempty"`
	MaxRetries     int64          `json:"maxRetries"`
	MessageGroups  []MessageGroup `json:"messageGroups"`
}
