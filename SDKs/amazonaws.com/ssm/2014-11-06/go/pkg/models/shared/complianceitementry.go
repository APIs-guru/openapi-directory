package shared

// ComplianceItemEntry
// Information about a compliance item.
type ComplianceItemEntry struct {
	Details  map[string]string      `json:"Details,omitempty"`
	ID       *string                `json:"Id,omitempty"`
	Severity ComplianceSeverityEnum `json:"Severity"`
	Status   ComplianceStatusEnum   `json:"Status"`
	Title    *string                `json:"Title,omitempty"`
}
