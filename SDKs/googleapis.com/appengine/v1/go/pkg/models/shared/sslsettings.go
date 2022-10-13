package shared

type SslSettingsSslManagementTypeEnum string

const (
	SslSettingsSslManagementTypeEnumSslManagementTypeUnspecified SslSettingsSslManagementTypeEnum = "SSL_MANAGEMENT_TYPE_UNSPECIFIED"
	SslSettingsSslManagementTypeEnumAutomatic                    SslSettingsSslManagementTypeEnum = "AUTOMATIC"
	SslSettingsSslManagementTypeEnumManual                       SslSettingsSslManagementTypeEnum = "MANUAL"
)

type SslSettings struct {
	CertificateID               *string                           `json:"certificateId"`
	PendingManagedCertificateID *string                           `json:"pendingManagedCertificateId"`
	SslManagementType           *SslSettingsSslManagementTypeEnum `json:"sslManagementType"`
}
