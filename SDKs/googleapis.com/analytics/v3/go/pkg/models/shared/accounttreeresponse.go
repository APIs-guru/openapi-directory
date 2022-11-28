package shared

// AccountTreeResponse
// JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
type AccountTreeResponse struct {
	Account     *Account     `json:"account,omitempty"`
	Kind        *string      `json:"kind,omitempty"`
	Profile     *Profile     `json:"profile,omitempty"`
	Webproperty *Webproperty `json:"webproperty,omitempty"`
}
