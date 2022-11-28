package shared

// StatelessRuleGroupReference
// Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group.
type StatelessRuleGroupReference struct {
	Priority    int64  `json:"Priority"`
	ResourceArn string `json:"ResourceArn"`
}
