package shared

// RuleDefinition
// The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
type RuleDefinition struct {
	Actions         []string        `json:"Actions"`
	MatchAttributes MatchAttributes `json:"MatchAttributes"`
}
