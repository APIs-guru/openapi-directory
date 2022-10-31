package shared



type RiskSummary struct {
    ClientToolsRisk *string `json:"client_tools_risk,omitempty"`
    CryptoRisk *string `json:"crypto_risk,omitempty"`
    KernelRisk *string `json:"kernel_risk,omitempty"`
    NetServicesRisk *string `json:"net_services_risk,omitempty"`
    
}

