package shared

import (
"time")

type LoadBalancerTLSCertificate struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    DomainName *string `json:"domainName,omitempty"`
    DomainValidationRecords []LoadBalancerTLSCertificateDomainValidationRecord `json:"domainValidationRecords,omitempty"`
    FailureReason *LoadBalancerTLSCertificateFailureReasonEnum `json:"failureReason,omitempty"`
    IsAttached *bool `json:"isAttached,omitempty"`
    IssuedAt *time.Time `json:"issuedAt,omitempty"`
    Issuer *string `json:"issuer,omitempty"`
    KeyAlgorithm *string `json:"keyAlgorithm,omitempty"`
    LoadBalancerName *string `json:"loadBalancerName,omitempty"`
    Location *ResourceLocation `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    NotAfter *time.Time `json:"notAfter,omitempty"`
    NotBefore *time.Time `json:"notBefore,omitempty"`
    RenewalSummary *LoadBalancerTLSCertificateRenewalSummary `json:"renewalSummary,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    RevocationReason *LoadBalancerTLSCertificateRevocationReasonEnum `json:"revocationReason,omitempty"`
    RevokedAt *time.Time `json:"revokedAt,omitempty"`
    Serial *string `json:"serial,omitempty"`
    SignatureAlgorithm *string `json:"signatureAlgorithm,omitempty"`
    Status *LoadBalancerTLSCertificateStatusEnum `json:"status,omitempty"`
    Subject *string `json:"subject,omitempty"`
    SubjectAlternativeNames []string `json:"subjectAlternativeNames,omitempty"`
    SupportCode *string `json:"supportCode,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

