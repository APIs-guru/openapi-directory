package shared

type ResolveCustomerResult struct {
	CustomerIdentifier *string `json:"CustomerIdentifier,omitempty"`
	ProductCode        *string `json:"ProductCode,omitempty"`
}
