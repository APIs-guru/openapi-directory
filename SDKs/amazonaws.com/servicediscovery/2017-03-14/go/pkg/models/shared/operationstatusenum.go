package shared




type OperationStatusEnum string

const (
    OperationStatusEnumSubmitted OperationStatusEnum = "SUBMITTED"
OperationStatusEnumPending OperationStatusEnum = "PENDING"
OperationStatusEnumSuccess OperationStatusEnum = "SUCCESS"
OperationStatusEnumFail OperationStatusEnum = "FAIL"
)


