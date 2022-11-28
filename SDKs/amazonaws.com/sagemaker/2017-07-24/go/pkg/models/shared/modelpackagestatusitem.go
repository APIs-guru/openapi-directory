package shared

// ModelPackageStatusItem
// Represents the overall status of a model package.
type ModelPackageStatusItem struct {
	FailureReason *string                        `json:"FailureReason,omitempty"`
	Name          string                         `json:"Name"`
	Status        DetailedModelPackageStatusEnum `json:"Status"`
}
