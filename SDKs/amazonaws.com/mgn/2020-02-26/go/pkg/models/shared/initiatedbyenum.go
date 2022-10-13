package shared

type InitiatedByEnum string

const (
	InitiatedByEnumStartTest    InitiatedByEnum = "START_TEST"
	InitiatedByEnumStartCutover InitiatedByEnum = "START_CUTOVER"
	InitiatedByEnumDiagnostic   InitiatedByEnum = "DIAGNOSTIC"
	InitiatedByEnumTerminate    InitiatedByEnum = "TERMINATE"
)
