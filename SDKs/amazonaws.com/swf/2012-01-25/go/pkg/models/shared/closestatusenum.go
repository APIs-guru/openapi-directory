package shared

type CloseStatusEnum string

const (
	CloseStatusEnumCompleted      CloseStatusEnum = "COMPLETED"
	CloseStatusEnumFailed         CloseStatusEnum = "FAILED"
	CloseStatusEnumCanceled       CloseStatusEnum = "CANCELED"
	CloseStatusEnumTerminated     CloseStatusEnum = "TERMINATED"
	CloseStatusEnumContinuedAsNew CloseStatusEnum = "CONTINUED_AS_NEW"
	CloseStatusEnumTimedOut       CloseStatusEnum = "TIMED_OUT"
)
