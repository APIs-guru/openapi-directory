package shared

import (
"time")

type SslCertificateDetail struct {
    CommonName *string `json:"common_name,omitempty"`
    ExpiresAfter *time.Time `json:"expires_after,omitempty"`
    Sha1Fingerprint *string `json:"sha1_fingerprint,omitempty"`
    SubjectAltNames []SslSubjectAltName `json:"subject_alt_names,omitempty"`
    Type *SslCertificateTypeEnum `json:"type,omitempty"`
    ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level,omitempty"`
    
}

