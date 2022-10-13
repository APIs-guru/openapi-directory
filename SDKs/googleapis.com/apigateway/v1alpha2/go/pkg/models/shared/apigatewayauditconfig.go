package shared

type ApigatewayAuditConfig struct {
	AuditLogConfigs []ApigatewayAuditLogConfig `json:"auditLogConfigs"`
	Service         *string                    `json:"service"`
}
