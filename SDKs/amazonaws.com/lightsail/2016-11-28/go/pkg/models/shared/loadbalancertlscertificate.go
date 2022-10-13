package shared

import (
	"time"
)

type LoadBalancerTLSCertificate struct {
	Arn                     *string                                            `json:"arn"`
	CreatedAt               *time.Time                                         `json:"createdAt"`
	DomainName              *string                                            `json:"domainName"`
	DomainValidationRecords []LoadBalancerTLSCertificateDomainValidationRecord `json:"domainValidationRecords"`
	FailureReason           *LoadBalancerTLSCertificateFailureReasonEnum       `json:"failureReason"`
	IsAttached              *bool                                              `json:"isAttached"`
	IssuedAt                *time.Time                                         `json:"issuedAt"`
	Issuer                  *string                                            `json:"issuer"`
	KeyAlgorithm            *string                                            `json:"keyAlgorithm"`
	LoadBalancerName        *string                                            `json:"loadBalancerName"`
	Location                *ResourceLocation                                  `json:"location"`
	Name                    *string                                            `json:"name"`
	NotAfter                *time.Time                                         `json:"notAfter"`
	NotBefore               *time.Time                                         `json:"notBefore"`
	RenewalSummary          *LoadBalancerTLSCertificateRenewalSummary          `json:"renewalSummary"`
	ResourceType            *ResourceTypeEnum                                  `json:"resourceType"`
	RevocationReason        *LoadBalancerTLSCertificateRevocationReasonEnum    `json:"revocationReason"`
	RevokedAt               *time.Time                                         `json:"revokedAt"`
	Serial                  *string                                            `json:"serial"`
	SignatureAlgorithm      *string                                            `json:"signatureAlgorithm"`
	Status                  *LoadBalancerTLSCertificateStatusEnum              `json:"status"`
	Subject                 *string                                            `json:"subject"`
	SubjectAlternativeNames []string                                           `json:"subjectAlternativeNames"`
	SupportCode             *string                                            `json:"supportCode"`
	Tags                    []Tag                                              `json:"tags"`
}
