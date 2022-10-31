package shared



type ListWebsiteCertificateAuthoritiesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    WebsiteCertificateAuthorities []WebsiteCaSummary `json:"WebsiteCertificateAuthorities,omitempty"`
    
}

