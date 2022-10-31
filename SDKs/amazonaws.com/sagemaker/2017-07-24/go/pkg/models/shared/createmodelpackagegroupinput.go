package shared

type CreateModelPackageGroupInput struct {
	ModelPackageGroupDescription *string `json:"ModelPackageGroupDescription,omitempty"`
	ModelPackageGroupName        string  `json:"ModelPackageGroupName"`
	Tags                         []Tag   `json:"Tags,omitempty"`
}
