package shared

// PolicySummary
// Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.
type PolicySummary struct {
	Arn         *string         `json:"Arn,omitempty"`
	AwsManaged  *bool           `json:"AwsManaged,omitempty"`
	Description *string         `json:"Description,omitempty"`
	ID          *string         `json:"Id,omitempty"`
	Name        *string         `json:"Name,omitempty"`
	Type        *PolicyTypeEnum `json:"Type,omitempty"`
}
