package shared



type ApigatewayPolicy struct {
    AuditConfigs []ApigatewayAuditConfig `json:"auditConfigs,omitempty"`
    Bindings []ApigatewayBinding `json:"bindings,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Version *int32 `json:"version,omitempty"`
    
}

