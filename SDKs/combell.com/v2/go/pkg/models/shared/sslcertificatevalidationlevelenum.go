package shared

type SslCertificateValidationLevelEnum string

const (
	SslCertificateValidationLevelEnumDomainValidated       SslCertificateValidationLevelEnum = "domain_validated"
	SslCertificateValidationLevelEnumOrganizationValidated SslCertificateValidationLevelEnum = "organization_validated"
	SslCertificateValidationLevelEnumExtendedValidated     SslCertificateValidationLevelEnum = "extended_validated"
)
