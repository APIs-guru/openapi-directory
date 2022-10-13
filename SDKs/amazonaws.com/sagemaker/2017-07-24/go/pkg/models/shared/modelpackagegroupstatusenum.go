package shared

type ModelPackageGroupStatusEnum string

const (
	ModelPackageGroupStatusEnumPending      ModelPackageGroupStatusEnum = "Pending"
	ModelPackageGroupStatusEnumInProgress   ModelPackageGroupStatusEnum = "InProgress"
	ModelPackageGroupStatusEnumCompleted    ModelPackageGroupStatusEnum = "Completed"
	ModelPackageGroupStatusEnumFailed       ModelPackageGroupStatusEnum = "Failed"
	ModelPackageGroupStatusEnumDeleting     ModelPackageGroupStatusEnum = "Deleting"
	ModelPackageGroupStatusEnumDeleteFailed ModelPackageGroupStatusEnum = "DeleteFailed"
)
