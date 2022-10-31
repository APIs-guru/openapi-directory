package shared

type SslCertificateRequestValidationTypeEnum string

const (
	SslCertificateRequestValidationTypeEnumDNS   SslCertificateRequestValidationTypeEnum = "dns"
	SslCertificateRequestValidationTypeEnumFile  SslCertificateRequestValidationTypeEnum = "file"
	SslCertificateRequestValidationTypeEnumEmail SslCertificateRequestValidationTypeEnum = "email"
)
