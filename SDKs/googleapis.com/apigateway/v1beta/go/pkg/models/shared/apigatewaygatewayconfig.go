package shared

// ApigatewayGatewayConfig
// Configuration settings for Gateways.
type ApigatewayGatewayConfig struct {
	BackendConfig *ApigatewayBackendConfig `json:"backendConfig,omitempty"`
}
