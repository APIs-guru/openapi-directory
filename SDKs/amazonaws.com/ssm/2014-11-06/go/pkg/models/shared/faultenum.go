package shared

type FaultEnum string

const (
	FaultEnumClient  FaultEnum = "Client"
	FaultEnumServer  FaultEnum = "Server"
	FaultEnumUnknown FaultEnum = "Unknown"
)
