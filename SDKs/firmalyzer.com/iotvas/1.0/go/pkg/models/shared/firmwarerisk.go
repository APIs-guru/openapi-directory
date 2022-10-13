package shared

type FirmwareRisk struct {
	RiskSummary          *RiskSummary          `json:"risk_summary"`
	VulnerableComponents []VulnerableComponent `json:"vulnerable_components"`
}
