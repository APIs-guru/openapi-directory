package shared

import (
	"time"
)

type SslCertificate struct {
	CommonName      *string                            `json:"common_name,omitempty"`
	ExpiresAfter    *time.Time                         `json:"expires_after,omitempty"`
	Sha1Fingerprint *string                            `json:"sha1_fingerprint,omitempty"`
	Type            *SslCertificateTypeEnum            `json:"type,omitempty"`
	ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level,omitempty"`
}
