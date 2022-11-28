package shared

// ComplianceItem
// Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on.
type ComplianceItem struct {
	ComplianceType   *string                     `json:"ComplianceType,omitempty"`
	Details          map[string]string           `json:"Details,omitempty"`
	ExecutionSummary *ComplianceExecutionSummary `json:"ExecutionSummary,omitempty"`
	ID               *string                     `json:"Id,omitempty"`
	ResourceID       *string                     `json:"ResourceId,omitempty"`
	ResourceType     *string                     `json:"ResourceType,omitempty"`
	Severity         *ComplianceSeverityEnum     `json:"Severity,omitempty"`
	Status           *ComplianceStatusEnum       `json:"Status,omitempty"`
	Title            *string                     `json:"Title,omitempty"`
}
