package shared

import (
	"time"
)

type SslCertificateDetail struct {
	CommonName      *string                            `json:"common_name"`
	ExpiresAfter    *time.Time                         `json:"expires_after"`
	Sha1Fingerprint *string                            `json:"sha1_fingerprint"`
	SubjectAltNames []SslSubjectAltName                `json:"subject_alt_names"`
	Type            *SslCertificateTypeEnum            `json:"type"`
	ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level"`
}
