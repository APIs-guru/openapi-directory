package shared

// ListDomainDeliverabilityCampaignsResponse
// An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
type ListDomainDeliverabilityCampaignsResponse struct {
	DomainDeliverabilityCampaigns []DomainDeliverabilityCampaign `json:"DomainDeliverabilityCampaigns"`
	NextToken                     *string                        `json:"NextToken,omitempty"`
}
