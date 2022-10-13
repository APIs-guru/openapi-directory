package shared

type PutModelPackageGroupPolicyInput struct {
	ModelPackageGroupName string `json:"ModelPackageGroupName"`
	ResourcePolicy        string `json:"ResourcePolicy"`
}
