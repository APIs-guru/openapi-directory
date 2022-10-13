package shared

type ComplianceItem struct {
	ComplianceType   *string                     `json:"ComplianceType"`
	Details          map[string]string           `json:"Details"`
	ExecutionSummary *ComplianceExecutionSummary `json:"ExecutionSummary"`
	ID               *string                     `json:"Id"`
	ResourceID       *string                     `json:"ResourceId"`
	ResourceType     *string                     `json:"ResourceType"`
	Severity         *ComplianceSeverityEnum     `json:"Severity"`
	Status           *ComplianceStatusEnum       `json:"Status"`
	Title            *string                     `json:"Title"`
}
