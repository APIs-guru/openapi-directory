package shared

type ResponseSpecification struct {
	AllowInterrupt *bool          `json:"allowInterrupt"`
	MessageGroups  []MessageGroup `json:"messageGroups"`
}
