package shared

// AuthorizedDomain
// A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Webmaster Central (https://www.google.com/webmasters/verification/home).
type AuthorizedDomain struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}
