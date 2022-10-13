package shared

type ComplianceItemEntry struct {
	Details  map[string]string      `json:"Details"`
	ID       *string                `json:"Id"`
	Severity ComplianceSeverityEnum `json:"Severity"`
	Status   ComplianceStatusEnum   `json:"Status"`
	Title    *string                `json:"Title"`
}
