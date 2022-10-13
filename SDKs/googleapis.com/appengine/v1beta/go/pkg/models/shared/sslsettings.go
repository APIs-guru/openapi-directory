package shared

type SslSettingsSslManagementTypeEnum string

const (
	SslSettingsSslManagementTypeEnumAutomatic SslSettingsSslManagementTypeEnum = "AUTOMATIC"
	SslSettingsSslManagementTypeEnumManual    SslSettingsSslManagementTypeEnum = "MANUAL"
)

type SslSettings struct {
	CertificateID               *string                           `json:"certificateId"`
	PendingManagedCertificateID *string                           `json:"pendingManagedCertificateId"`
	SslManagementType           *SslSettingsSslManagementTypeEnum `json:"sslManagementType"`
}
