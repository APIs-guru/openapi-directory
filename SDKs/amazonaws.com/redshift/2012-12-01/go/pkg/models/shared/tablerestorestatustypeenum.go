package shared

type TableRestoreStatusTypeEnum string

const (
	TableRestoreStatusTypeEnumPending    TableRestoreStatusTypeEnum = "PENDING"
	TableRestoreStatusTypeEnumInProgress TableRestoreStatusTypeEnum = "IN_PROGRESS"
	TableRestoreStatusTypeEnumSucceeded  TableRestoreStatusTypeEnum = "SUCCEEDED"
	TableRestoreStatusTypeEnumFailed     TableRestoreStatusTypeEnum = "FAILED"
	TableRestoreStatusTypeEnumCanceled   TableRestoreStatusTypeEnum = "CANCELED"
)
