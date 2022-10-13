package shared

type RiskSummary struct {
	ClientToolsRisk *string `json:"client_tools_risk"`
	CryptoRisk      *string `json:"crypto_risk"`
	KernelRisk      *string `json:"kernel_risk"`
	NetServicesRisk *string `json:"net_services_risk"`
}
