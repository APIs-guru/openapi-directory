package shared

// OncCertificateProvider
// This feature is not generally available.
type OncCertificateProvider struct {
	CertificateReferences   []string                 `json:"certificateReferences,omitempty"`
	ContentProviderEndpoint *ContentProviderEndpoint `json:"contentProviderEndpoint,omitempty"`
}
