package shared

type ManagedCertificateStatusEnum string

const (
	ManagedCertificateStatusEnumManagementStatusUnspecified ManagedCertificateStatusEnum = "MANAGEMENT_STATUS_UNSPECIFIED"
	ManagedCertificateStatusEnumOk                          ManagedCertificateStatusEnum = "OK"
	ManagedCertificateStatusEnumPending                     ManagedCertificateStatusEnum = "PENDING"
	ManagedCertificateStatusEnumFailedRetryingNotVisible    ManagedCertificateStatusEnum = "FAILED_RETRYING_NOT_VISIBLE"
	ManagedCertificateStatusEnumFailedPermanent             ManagedCertificateStatusEnum = "FAILED_PERMANENT"
	ManagedCertificateStatusEnumFailedRetryingCaaForbidden  ManagedCertificateStatusEnum = "FAILED_RETRYING_CAA_FORBIDDEN"
	ManagedCertificateStatusEnumFailedRetryingCaaChecking   ManagedCertificateStatusEnum = "FAILED_RETRYING_CAA_CHECKING"
)

type ManagedCertificate struct {
	LastRenewalTime *string                       `json:"lastRenewalTime,omitempty"`
	Status          *ManagedCertificateStatusEnum `json:"status,omitempty"`
}
