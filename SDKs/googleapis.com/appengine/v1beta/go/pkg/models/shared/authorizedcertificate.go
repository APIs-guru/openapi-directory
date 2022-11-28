package shared

// AuthorizedCertificate
// An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
type AuthorizedCertificate struct {
	CertificateRawData    *CertificateRawData `json:"certificateRawData,omitempty"`
	DisplayName           *string             `json:"displayName,omitempty"`
	DomainMappingsCount   *int32              `json:"domainMappingsCount,omitempty"`
	DomainNames           []string            `json:"domainNames,omitempty"`
	ExpireTime            *string             `json:"expireTime,omitempty"`
	ID                    *string             `json:"id,omitempty"`
	ManagedCertificate    *ManagedCertificate `json:"managedCertificate,omitempty"`
	Name                  *string             `json:"name,omitempty"`
	VisibleDomainMappings []string            `json:"visibleDomainMappings,omitempty"`
}
