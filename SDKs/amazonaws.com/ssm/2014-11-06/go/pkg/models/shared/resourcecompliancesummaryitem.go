package shared

type ResourceComplianceSummaryItem struct {
	ComplianceType      *string                     `json:"ComplianceType,omitempty"`
	CompliantSummary    *CompliantSummary           `json:"CompliantSummary,omitempty"`
	ExecutionSummary    *ComplianceExecutionSummary `json:"ExecutionSummary,omitempty"`
	NonCompliantSummary *NonCompliantSummary        `json:"NonCompliantSummary,omitempty"`
	OverallSeverity     *ComplianceSeverityEnum     `json:"OverallSeverity,omitempty"`
	ResourceID          *string                     `json:"ResourceId,omitempty"`
	ResourceType        *string                     `json:"ResourceType,omitempty"`
	Status              *ComplianceStatusEnum       `json:"Status,omitempty"`
}
