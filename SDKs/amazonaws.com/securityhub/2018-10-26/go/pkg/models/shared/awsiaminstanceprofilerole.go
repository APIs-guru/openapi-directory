package shared

type AwsIamInstanceProfileRole struct {
	Arn                      *string `json:"Arn,omitempty"`
	AssumeRolePolicyDocument *string `json:"AssumeRolePolicyDocument,omitempty"`
	CreateDate               *string `json:"CreateDate,omitempty"`
	Path                     *string `json:"Path,omitempty"`
	RoleID                   *string `json:"RoleId,omitempty"`
	RoleName                 *string `json:"RoleName,omitempty"`
}
