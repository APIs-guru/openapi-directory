package shared

type ResponseSpecification struct {
	AllowInterrupt *bool          `json:"allowInterrupt,omitempty"`
	MessageGroups  []MessageGroup `json:"messageGroups"`
}
