package shared

type ResourceComplianceSummaryItem struct {
	ComplianceType      *string                     `json:"ComplianceType"`
	CompliantSummary    *CompliantSummary           `json:"CompliantSummary"`
	ExecutionSummary    *ComplianceExecutionSummary `json:"ExecutionSummary"`
	NonCompliantSummary *NonCompliantSummary        `json:"NonCompliantSummary"`
	OverallSeverity     *ComplianceSeverityEnum     `json:"OverallSeverity"`
	ResourceID          *string                     `json:"ResourceId"`
	ResourceType        *string                     `json:"ResourceType"`
	Status              *ComplianceStatusEnum       `json:"Status"`
}
