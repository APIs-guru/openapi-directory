package shared

import (
	"time"
)

type SslCertificate struct {
	CommonName      *string                            `json:"common_name"`
	ExpiresAfter    *time.Time                         `json:"expires_after"`
	Sha1Fingerprint *string                            `json:"sha1_fingerprint"`
	Type            *SslCertificateTypeEnum            `json:"type"`
	ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level"`
}
