package shared

type AwsIamPolicyDetails struct {
	AttachmentCount               *int64                `json:"AttachmentCount,omitempty"`
	CreateDate                    *string               `json:"CreateDate,omitempty"`
	DefaultVersionID              *string               `json:"DefaultVersionId,omitempty"`
	Description                   *string               `json:"Description,omitempty"`
	IsAttachable                  *bool                 `json:"IsAttachable,omitempty"`
	Path                          *string               `json:"Path,omitempty"`
	PermissionsBoundaryUsageCount *int64                `json:"PermissionsBoundaryUsageCount,omitempty"`
	PolicyID                      *string               `json:"PolicyId,omitempty"`
	PolicyName                    *string               `json:"PolicyName,omitempty"`
	PolicyVersionList             []AwsIamPolicyVersion `json:"PolicyVersionList,omitempty"`
	UpdateDate                    *string               `json:"UpdateDate,omitempty"`
}
