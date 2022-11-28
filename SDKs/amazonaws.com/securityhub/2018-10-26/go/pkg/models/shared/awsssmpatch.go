package shared

// AwsSsmPatch
// Provides details about the compliance for a patch.
type AwsSsmPatch struct {
	ComplianceSummary *AwsSsmComplianceSummary `json:"ComplianceSummary,omitempty"`
}
