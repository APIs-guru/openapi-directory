package shared

type ResolveCustomerResult struct {
	CustomerIdentifier *string `json:"CustomerIdentifier"`
	ProductCode        *string `json:"ProductCode"`
}
