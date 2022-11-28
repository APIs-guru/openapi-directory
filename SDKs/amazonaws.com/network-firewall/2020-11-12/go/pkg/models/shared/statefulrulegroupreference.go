package shared

// StatefulRuleGroupReference
// Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.
type StatefulRuleGroupReference struct {
	ResourceArn string `json:"ResourceArn"`
}
