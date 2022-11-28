package shared

import (
	"time"
)

// Certificate
// <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
type Certificate struct {
	Arn                     *string                  `json:"arn,omitempty"`
	CreatedAt               *time.Time               `json:"createdAt,omitempty"`
	DomainName              *string                  `json:"domainName,omitempty"`
	DomainValidationRecords []DomainValidationRecord `json:"domainValidationRecords,omitempty"`
	EligibleToRenew         *string                  `json:"eligibleToRenew,omitempty"`
	InUseResourceCount      *int64                   `json:"inUseResourceCount,omitempty"`
	IssuedAt                *time.Time               `json:"issuedAt,omitempty"`
	IssuerCa                *string                  `json:"issuerCA,omitempty"`
	KeyAlgorithm            *string                  `json:"keyAlgorithm,omitempty"`
	Name                    *string                  `json:"name,omitempty"`
	NotAfter                *time.Time               `json:"notAfter,omitempty"`
	NotBefore               *time.Time               `json:"notBefore,omitempty"`
	RenewalSummary          *RenewalSummary          `json:"renewalSummary,omitempty"`
	RequestFailureReason    *string                  `json:"requestFailureReason,omitempty"`
	RevocationReason        *string                  `json:"revocationReason,omitempty"`
	RevokedAt               *time.Time               `json:"revokedAt,omitempty"`
	SerialNumber            *string                  `json:"serialNumber,omitempty"`
	Status                  *CertificateStatusEnum   `json:"status,omitempty"`
	SubjectAlternativeNames []string                 `json:"subjectAlternativeNames,omitempty"`
	SupportCode             *string                  `json:"supportCode,omitempty"`
	Tags                    []Tag                    `json:"tags,omitempty"`
}
