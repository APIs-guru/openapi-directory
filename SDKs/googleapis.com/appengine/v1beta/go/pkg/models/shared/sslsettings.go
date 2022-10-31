package shared

type SslSettingsSslManagementTypeEnum string

const (
	SslSettingsSslManagementTypeEnumAutomatic SslSettingsSslManagementTypeEnum = "AUTOMATIC"
	SslSettingsSslManagementTypeEnumManual    SslSettingsSslManagementTypeEnum = "MANUAL"
)

type SslSettings struct {
	CertificateID               *string                           `json:"certificateId,omitempty"`
	PendingManagedCertificateID *string                           `json:"pendingManagedCertificateId,omitempty"`
	SslManagementType           *SslSettingsSslManagementTypeEnum `json:"sslManagementType,omitempty"`
}
