package shared

type ModelPackageStatusEnum string

const (
	ModelPackageStatusEnumPending    ModelPackageStatusEnum = "Pending"
	ModelPackageStatusEnumInProgress ModelPackageStatusEnum = "InProgress"
	ModelPackageStatusEnumCompleted  ModelPackageStatusEnum = "Completed"
	ModelPackageStatusEnumFailed     ModelPackageStatusEnum = "Failed"
	ModelPackageStatusEnumDeleting   ModelPackageStatusEnum = "Deleting"
)
