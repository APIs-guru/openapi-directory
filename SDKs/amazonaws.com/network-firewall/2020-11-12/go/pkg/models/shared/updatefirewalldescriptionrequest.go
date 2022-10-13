package shared

type UpdateFirewallDescriptionRequest struct {
	Description  *string `json:"Description"`
	FirewallArn  *string `json:"FirewallArn"`
	FirewallName *string `json:"FirewallName"`
	UpdateToken  *string `json:"UpdateToken"`
}
