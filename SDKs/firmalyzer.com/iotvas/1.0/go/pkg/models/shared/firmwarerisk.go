package shared



type FirmwareRisk struct {
    RiskSummary *RiskSummary `json:"risk_summary,omitempty"`
    VulnerableComponents []VulnerableComponent `json:"vulnerable_components,omitempty"`
    
}

