package shared

type AuthorizedCertificate struct {
	CertificateRawData    *CertificateRawData `json:"certificateRawData"`
	DisplayName           *string             `json:"displayName"`
	DomainMappingsCount   *int32              `json:"domainMappingsCount"`
	DomainNames           []string            `json:"domainNames"`
	ExpireTime            *string             `json:"expireTime"`
	ID                    *string             `json:"id"`
	ManagedCertificate    *ManagedCertificate `json:"managedCertificate"`
	Name                  *string             `json:"name"`
	VisibleDomainMappings []string            `json:"visibleDomainMappings"`
}
