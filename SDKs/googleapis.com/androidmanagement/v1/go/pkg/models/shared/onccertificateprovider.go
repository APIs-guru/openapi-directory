package shared

type OncCertificateProvider struct {
	CertificateReferences   []string                 `json:"certificateReferences"`
	ContentProviderEndpoint *ContentProviderEndpoint `json:"contentProviderEndpoint"`
}
