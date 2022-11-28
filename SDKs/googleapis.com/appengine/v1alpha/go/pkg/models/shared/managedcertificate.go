package shared

type ManagedCertificateStatusEnum string

const (
	ManagedCertificateStatusEnumUnspecifiedStatus           ManagedCertificateStatusEnum = "UNSPECIFIED_STATUS"
	ManagedCertificateStatusEnumOk                          ManagedCertificateStatusEnum = "OK"
	ManagedCertificateStatusEnumPending                     ManagedCertificateStatusEnum = "PENDING"
	ManagedCertificateStatusEnumFailedRetryingInternal      ManagedCertificateStatusEnum = "FAILED_RETRYING_INTERNAL"
	ManagedCertificateStatusEnumFailedRetryingNotVisible    ManagedCertificateStatusEnum = "FAILED_RETRYING_NOT_VISIBLE"
	ManagedCertificateStatusEnumFailedPermanentlyNotVisible ManagedCertificateStatusEnum = "FAILED_PERMANENTLY_NOT_VISIBLE"
	ManagedCertificateStatusEnumFailedRetryingCaaForbidden  ManagedCertificateStatusEnum = "FAILED_RETRYING_CAA_FORBIDDEN"
	ManagedCertificateStatusEnumFailedRetryingCaaChecking   ManagedCertificateStatusEnum = "FAILED_RETRYING_CAA_CHECKING"
)

// ManagedCertificate
// A certificate managed by App Engine.
type ManagedCertificate struct {
	LastRenewalTime *string                       `json:"lastRenewalTime,omitempty"`
	Status          *ManagedCertificateStatusEnum `json:"status,omitempty"`
}
