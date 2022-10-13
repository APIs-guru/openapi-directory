package shared

type ModelPackageStatusItem struct {
	FailureReason *string                        `json:"FailureReason"`
	Name          string                         `json:"Name"`
	Status        DetailedModelPackageStatusEnum `json:"Status"`
}
