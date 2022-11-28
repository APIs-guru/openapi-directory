package shared

type ApigatewayAuditLogConfigLogTypeEnum string

const (
	ApigatewayAuditLogConfigLogTypeEnumLogTypeUnspecified ApigatewayAuditLogConfigLogTypeEnum = "LOG_TYPE_UNSPECIFIED"
	ApigatewayAuditLogConfigLogTypeEnumAdminRead          ApigatewayAuditLogConfigLogTypeEnum = "ADMIN_READ"
	ApigatewayAuditLogConfigLogTypeEnumDataWrite          ApigatewayAuditLogConfigLogTypeEnum = "DATA_WRITE"
	ApigatewayAuditLogConfigLogTypeEnumDataRead           ApigatewayAuditLogConfigLogTypeEnum = "DATA_READ"
)

// ApigatewayAuditLogConfig
// Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
type ApigatewayAuditLogConfig struct {
	ExemptedMembers []string                             `json:"exemptedMembers,omitempty"`
	LogType         *ApigatewayAuditLogConfigLogTypeEnum `json:"logType,omitempty"`
}
