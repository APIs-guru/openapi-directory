package shared

type AwsIamInstanceProfile struct {
	Arn                 *string                     `json:"Arn,omitempty"`
	CreateDate          *string                     `json:"CreateDate,omitempty"`
	InstanceProfileID   *string                     `json:"InstanceProfileId,omitempty"`
	InstanceProfileName *string                     `json:"InstanceProfileName,omitempty"`
	Path                *string                     `json:"Path,omitempty"`
	Roles               []AwsIamInstanceProfileRole `json:"Roles,omitempty"`
}
