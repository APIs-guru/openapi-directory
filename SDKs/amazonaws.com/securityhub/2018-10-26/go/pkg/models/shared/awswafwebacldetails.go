package shared

type AwsWafWebACLDetails struct {
	DefaultAction *string            `json:"DefaultAction,omitempty"`
	Name          *string            `json:"Name,omitempty"`
	Rules         []AwsWafWebACLRule `json:"Rules,omitempty"`
	WebACLID      *string            `json:"WebAclId,omitempty"`
}
