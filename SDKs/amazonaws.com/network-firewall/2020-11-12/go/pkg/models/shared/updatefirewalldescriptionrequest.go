package shared

type UpdateFirewallDescriptionRequest struct {
	Description  *string `json:"Description,omitempty"`
	FirewallArn  *string `json:"FirewallArn,omitempty"`
	FirewallName *string `json:"FirewallName,omitempty"`
	UpdateToken  *string `json:"UpdateToken,omitempty"`
}
