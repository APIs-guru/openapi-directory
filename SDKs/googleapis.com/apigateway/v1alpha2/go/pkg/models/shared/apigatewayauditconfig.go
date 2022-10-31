package shared



type ApigatewayAuditConfig struct {
    AuditLogConfigs []ApigatewayAuditLogConfig `json:"auditLogConfigs,omitempty"`
    Service *string `json:"service,omitempty"`
    
}

