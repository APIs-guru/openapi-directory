package shared

// BatchUpdateIngressRulesRequest
// Request message for Firewall.BatchUpdateIngressRules.
type BatchUpdateIngressRulesRequest struct {
	IngressRules []FirewallRule `json:"ingressRules,omitempty"`
}
