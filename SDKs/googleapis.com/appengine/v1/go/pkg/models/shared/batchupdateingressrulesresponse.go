package shared

// BatchUpdateIngressRulesResponse
// Response message for Firewall.UpdateAllIngressRules.
type BatchUpdateIngressRulesResponse struct {
	IngressRules []FirewallRule `json:"ingressRules,omitempty"`
}
