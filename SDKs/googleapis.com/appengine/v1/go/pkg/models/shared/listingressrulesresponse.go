package shared



type ListIngressRulesResponse struct {
    IngressRules []FirewallRule `json:"ingressRules,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

