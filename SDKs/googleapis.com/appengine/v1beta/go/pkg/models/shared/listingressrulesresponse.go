package shared

// ListIngressRulesResponse
// Response message for Firewall.ListIngressRules.
type ListIngressRulesResponse struct {
	IngressRules  []FirewallRule `json:"ingressRules,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
