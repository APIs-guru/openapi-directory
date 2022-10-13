package shared

type ListWebsiteCertificateAuthoritiesResponse struct {
	NextToken                     *string            `json:"NextToken"`
	WebsiteCertificateAuthorities []WebsiteCaSummary `json:"WebsiteCertificateAuthorities"`
}
