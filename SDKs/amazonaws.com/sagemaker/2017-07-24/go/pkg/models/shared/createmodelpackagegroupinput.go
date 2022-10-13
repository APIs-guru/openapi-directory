package shared

type CreateModelPackageGroupInput struct {
	ModelPackageGroupDescription *string `json:"ModelPackageGroupDescription"`
	ModelPackageGroupName        string  `json:"ModelPackageGroupName"`
	Tags                         []Tag   `json:"Tags"`
}
