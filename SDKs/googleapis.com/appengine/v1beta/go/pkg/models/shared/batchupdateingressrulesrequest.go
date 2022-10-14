package shared

type BatchUpdateIngressRulesRequest struct {
	IngressRules []FirewallRule `json:"ingressRules,omitempty"`
}
