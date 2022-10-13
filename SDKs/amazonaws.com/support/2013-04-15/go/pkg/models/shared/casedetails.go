package shared

type CaseDetails struct {
	CaseID               *string                   `json:"caseId"`
	CategoryCode         *string                   `json:"categoryCode"`
	CcEmailAddresses     []string                  `json:"ccEmailAddresses"`
	DisplayID            *string                   `json:"displayId"`
	Language             *string                   `json:"language"`
	RecentCommunications *RecentCaseCommunications `json:"recentCommunications"`
	ServiceCode          *string                   `json:"serviceCode"`
	SeverityCode         *string                   `json:"severityCode"`
	Status               *string                   `json:"status"`
	Subject              *string                   `json:"subject"`
	SubmittedBy          *string                   `json:"submittedBy"`
	TimeCreated          *string                   `json:"timeCreated"`
}
