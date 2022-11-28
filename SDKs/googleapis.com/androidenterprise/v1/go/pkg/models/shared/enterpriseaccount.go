package shared

// EnterpriseAccount
// A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
type EnterpriseAccount struct {
	AccountEmail *string `json:"accountEmail,omitempty"`
}
