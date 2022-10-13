package shared

type StatusEnum string

const (
	StatusEnumBuilding          StatusEnum = "BUILDING"
	StatusEnumReady             StatusEnum = "READY"
	StatusEnumReadyBasicTesting StatusEnum = "READY_BASIC_TESTING"
	StatusEnumFailed            StatusEnum = "FAILED"
	StatusEnumNotBuilt          StatusEnum = "NOT_BUILT"
)
