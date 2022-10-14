package shared

type OncCertificateProvider struct {
	CertificateReferences   []string                 `json:"certificateReferences,omitempty"`
	ContentProviderEndpoint *ContentProviderEndpoint `json:"contentProviderEndpoint,omitempty"`
}
