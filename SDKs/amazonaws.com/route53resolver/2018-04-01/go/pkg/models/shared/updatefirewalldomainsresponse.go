package shared

type UpdateFirewallDomainsResponse struct {
	ID            *string                       `json:"Id,omitempty"`
	Name          *string                       `json:"Name,omitempty"`
	Status        *FirewallDomainListStatusEnum `json:"Status,omitempty"`
	StatusMessage *string                       `json:"StatusMessage,omitempty"`
}
