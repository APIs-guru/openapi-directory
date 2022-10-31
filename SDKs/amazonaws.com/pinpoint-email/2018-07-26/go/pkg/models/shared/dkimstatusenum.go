package shared

type DkimStatusEnum string

const (
	DkimStatusEnumPending          DkimStatusEnum = "PENDING"
	DkimStatusEnumSuccess          DkimStatusEnum = "SUCCESS"
	DkimStatusEnumFailed           DkimStatusEnum = "FAILED"
	DkimStatusEnumTemporaryFailure DkimStatusEnum = "TEMPORARY_FAILURE"
	DkimStatusEnumNotStarted       DkimStatusEnum = "NOT_STARTED"
)
