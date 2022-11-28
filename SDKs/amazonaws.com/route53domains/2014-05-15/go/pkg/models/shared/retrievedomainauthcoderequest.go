package shared

// RetrieveDomainAuthCodeRequest
// A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.
type RetrieveDomainAuthCodeRequest struct {
	DomainName string `json:"DomainName"`
}
