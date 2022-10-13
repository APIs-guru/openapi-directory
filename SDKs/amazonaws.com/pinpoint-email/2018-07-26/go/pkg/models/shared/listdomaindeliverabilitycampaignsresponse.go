package shared

type ListDomainDeliverabilityCampaignsResponse struct {
	DomainDeliverabilityCampaigns []DomainDeliverabilityCampaign `json:"DomainDeliverabilityCampaigns"`
	NextToken                     *string                        `json:"NextToken"`
}
