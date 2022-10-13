package shared

type AwsIamPolicyDetails struct {
	AttachmentCount               *int64                `json:"AttachmentCount"`
	CreateDate                    *string               `json:"CreateDate"`
	DefaultVersionID              *string               `json:"DefaultVersionId"`
	Description                   *string               `json:"Description"`
	IsAttachable                  *bool                 `json:"IsAttachable"`
	Path                          *string               `json:"Path"`
	PermissionsBoundaryUsageCount *int64                `json:"PermissionsBoundaryUsageCount"`
	PolicyID                      *string               `json:"PolicyId"`
	PolicyName                    *string               `json:"PolicyName"`
	PolicyVersionList             []AwsIamPolicyVersion `json:"PolicyVersionList"`
	UpdateDate                    *string               `json:"UpdateDate"`
}
