package shared

import (
	"time"
)

type Certificate struct {
	Arn                     *string                  `json:"arn"`
	CreatedAt               *time.Time               `json:"createdAt"`
	DomainName              *string                  `json:"domainName"`
	DomainValidationRecords []DomainValidationRecord `json:"domainValidationRecords"`
	EligibleToRenew         *string                  `json:"eligibleToRenew"`
	InUseResourceCount      *int64                   `json:"inUseResourceCount"`
	IssuedAt                *time.Time               `json:"issuedAt"`
	IssuerCa                *string                  `json:"issuerCA"`
	KeyAlgorithm            *string                  `json:"keyAlgorithm"`
	Name                    *string                  `json:"name"`
	NotAfter                *time.Time               `json:"notAfter"`
	NotBefore               *time.Time               `json:"notBefore"`
	RenewalSummary          *RenewalSummary          `json:"renewalSummary"`
	RequestFailureReason    *string                  `json:"requestFailureReason"`
	RevocationReason        *string                  `json:"revocationReason"`
	RevokedAt               *time.Time               `json:"revokedAt"`
	SerialNumber            *string                  `json:"serialNumber"`
	Status                  *CertificateStatusEnum   `json:"status"`
	SubjectAlternativeNames []string                 `json:"subjectAlternativeNames"`
	SupportCode             *string                  `json:"supportCode"`
	Tags                    []Tag                    `json:"tags"`
}
