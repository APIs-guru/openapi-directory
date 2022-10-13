package shared

type AdClient struct {
	ArcOptIn          *bool   `json:"arcOptIn"`
	ID                *string `json:"id"`
	Kind              *string `json:"kind"`
	ProductCode       *string `json:"productCode"`
	SupportsReporting *bool   `json:"supportsReporting"`
}
