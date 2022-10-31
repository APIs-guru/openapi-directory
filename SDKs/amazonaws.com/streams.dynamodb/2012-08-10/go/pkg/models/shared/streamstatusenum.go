package shared

type StreamStatusEnum string

const (
	StreamStatusEnumEnabling  StreamStatusEnum = "ENABLING"
	StreamStatusEnumEnabled   StreamStatusEnum = "ENABLED"
	StreamStatusEnumDisabling StreamStatusEnum = "DISABLING"
	StreamStatusEnumDisabled  StreamStatusEnum = "DISABLED"
)
