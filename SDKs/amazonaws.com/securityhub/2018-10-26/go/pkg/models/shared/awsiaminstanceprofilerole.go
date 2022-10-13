package shared

type AwsIamInstanceProfileRole struct {
	Arn                      *string `json:"Arn"`
	AssumeRolePolicyDocument *string `json:"AssumeRolePolicyDocument"`
	CreateDate               *string `json:"CreateDate"`
	Path                     *string `json:"Path"`
	RoleID                   *string `json:"RoleId"`
	RoleName                 *string `json:"RoleName"`
}
