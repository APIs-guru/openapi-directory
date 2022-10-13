package shared

type ListIngressRulesResponse struct {
	IngressRules  []FirewallRule `json:"ingressRules"`
	NextPageToken *string        `json:"nextPageToken"`
}
