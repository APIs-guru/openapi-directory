package shared

type AwsIamInstanceProfile struct {
	Arn                 *string                     `json:"Arn"`
	CreateDate          *string                     `json:"CreateDate"`
	InstanceProfileID   *string                     `json:"InstanceProfileId"`
	InstanceProfileName *string                     `json:"InstanceProfileName"`
	Path                *string                     `json:"Path"`
	Roles               []AwsIamInstanceProfileRole `json:"Roles"`
}
