package shared




type ChangeStatusEnum string

const (
    ChangeStatusEnumPreparing ChangeStatusEnum = "PREPARING"
ChangeStatusEnumApplying ChangeStatusEnum = "APPLYING"
ChangeStatusEnumSucceeded ChangeStatusEnum = "SUCCEEDED"
ChangeStatusEnumCancelled ChangeStatusEnum = "CANCELLED"
ChangeStatusEnumFailed ChangeStatusEnum = "FAILED"
)


