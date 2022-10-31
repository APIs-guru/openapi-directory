package shared



type GoogleIamV1AuditConfig struct {
    AuditLogConfigs []GoogleIamV1AuditLogConfig `json:"auditLogConfigs,omitempty"`
    Service *string `json:"service,omitempty"`
    
}

