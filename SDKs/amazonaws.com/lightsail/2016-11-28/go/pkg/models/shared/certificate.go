package shared

import (
"time")

type Certificate struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    DomainName *string `json:"domainName,omitempty"`
    DomainValidationRecords []DomainValidationRecord `json:"domainValidationRecords,omitempty"`
    EligibleToRenew *string `json:"eligibleToRenew,omitempty"`
    InUseResourceCount *int64 `json:"inUseResourceCount,omitempty"`
    IssuedAt *time.Time `json:"issuedAt,omitempty"`
    IssuerCa *string `json:"issuerCA,omitempty"`
    KeyAlgorithm *string `json:"keyAlgorithm,omitempty"`
    Name *string `json:"name,omitempty"`
    NotAfter *time.Time `json:"notAfter,omitempty"`
    NotBefore *time.Time `json:"notBefore,omitempty"`
    RenewalSummary *RenewalSummary `json:"renewalSummary,omitempty"`
    RequestFailureReason *string `json:"requestFailureReason,omitempty"`
    RevocationReason *string `json:"revocationReason,omitempty"`
    RevokedAt *time.Time `json:"revokedAt,omitempty"`
    SerialNumber *string `json:"serialNumber,omitempty"`
    Status *CertificateStatusEnum `json:"status,omitempty"`
    SubjectAlternativeNames []string `json:"subjectAlternativeNames,omitempty"`
    SupportCode *string `json:"supportCode,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

