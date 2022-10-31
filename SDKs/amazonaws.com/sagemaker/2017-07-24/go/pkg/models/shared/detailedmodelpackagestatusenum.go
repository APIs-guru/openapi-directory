package shared

type DetailedModelPackageStatusEnum string

const (
	DetailedModelPackageStatusEnumNotStarted DetailedModelPackageStatusEnum = "NotStarted"
	DetailedModelPackageStatusEnumInProgress DetailedModelPackageStatusEnum = "InProgress"
	DetailedModelPackageStatusEnumCompleted  DetailedModelPackageStatusEnum = "Completed"
	DetailedModelPackageStatusEnumFailed     DetailedModelPackageStatusEnum = "Failed"
)
