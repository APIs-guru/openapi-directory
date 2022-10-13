package shared

type ImportFirewallDomainsResponse struct {
	ID            *string                       `json:"Id"`
	Name          *string                       `json:"Name"`
	Status        *FirewallDomainListStatusEnum `json:"Status"`
	StatusMessage *string                       `json:"StatusMessage"`
}
