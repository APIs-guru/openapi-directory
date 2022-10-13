package shared

type ApigatewayPolicy struct {
	AuditConfigs []ApigatewayAuditConfig `json:"auditConfigs"`
	Bindings     []ApigatewayBinding     `json:"bindings"`
	Etag         *string                 `json:"etag"`
	Version      *int32                  `json:"version"`
}
