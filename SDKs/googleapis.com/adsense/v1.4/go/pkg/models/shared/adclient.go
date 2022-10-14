package shared

type AdClient struct {
	ArcOptIn          *bool   `json:"arcOptIn,omitempty"`
	ID                *string `json:"id,omitempty"`
	Kind              *string `json:"kind,omitempty"`
	ProductCode       *string `json:"productCode,omitempty"`
	SupportsReporting *bool   `json:"supportsReporting,omitempty"`
}
