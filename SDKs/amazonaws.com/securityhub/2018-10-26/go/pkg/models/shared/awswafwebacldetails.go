package shared

type AwsWafWebACLDetails struct {
	DefaultAction *string            `json:"DefaultAction"`
	Name          *string            `json:"Name"`
	Rules         []AwsWafWebACLRule `json:"Rules"`
	WebACLID      *string            `json:"WebAclId"`
}
