package shared

type WriteForwardingStatusEnum string

const (
	WriteForwardingStatusEnumEnabled   WriteForwardingStatusEnum = "enabled"
	WriteForwardingStatusEnumDisabled  WriteForwardingStatusEnum = "disabled"
	WriteForwardingStatusEnumEnabling  WriteForwardingStatusEnum = "enabling"
	WriteForwardingStatusEnumDisabling WriteForwardingStatusEnum = "disabling"
	WriteForwardingStatusEnumUnknown   WriteForwardingStatusEnum = "unknown"
)
