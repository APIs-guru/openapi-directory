package shared

type ApigatewayAuditLogConfigLogTypeEnum string

const (
	ApigatewayAuditLogConfigLogTypeEnumLogTypeUnspecified ApigatewayAuditLogConfigLogTypeEnum = "LOG_TYPE_UNSPECIFIED"
	ApigatewayAuditLogConfigLogTypeEnumAdminRead          ApigatewayAuditLogConfigLogTypeEnum = "ADMIN_READ"
	ApigatewayAuditLogConfigLogTypeEnumDataWrite          ApigatewayAuditLogConfigLogTypeEnum = "DATA_WRITE"
	ApigatewayAuditLogConfigLogTypeEnumDataRead           ApigatewayAuditLogConfigLogTypeEnum = "DATA_READ"
)

type ApigatewayAuditLogConfig struct {
	ExemptedMembers []string                             `json:"exemptedMembers,omitempty"`
	LogType         *ApigatewayAuditLogConfigLogTypeEnum `json:"logType,omitempty"`
}
