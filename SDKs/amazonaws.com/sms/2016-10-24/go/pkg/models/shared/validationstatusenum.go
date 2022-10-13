package shared

type ValidationStatusEnum string

const (
	ValidationStatusEnumReadyForValidation ValidationStatusEnum = "READY_FOR_VALIDATION"
	ValidationStatusEnumPending            ValidationStatusEnum = "PENDING"
	ValidationStatusEnumInProgress         ValidationStatusEnum = "IN_PROGRESS"
	ValidationStatusEnumSucceeded          ValidationStatusEnum = "SUCCEEDED"
	ValidationStatusEnumFailed             ValidationStatusEnum = "FAILED"
)
