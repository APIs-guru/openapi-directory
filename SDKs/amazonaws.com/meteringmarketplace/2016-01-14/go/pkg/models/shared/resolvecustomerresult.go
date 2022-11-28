package shared

// ResolveCustomerResult
// The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.
type ResolveCustomerResult struct {
	CustomerIdentifier *string `json:"CustomerIdentifier,omitempty"`
	ProductCode        *string `json:"ProductCode,omitempty"`
}
