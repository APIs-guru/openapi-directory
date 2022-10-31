package shared



type CaseDetails struct {
    CaseID *string `json:"caseId,omitempty"`
    CategoryCode *string `json:"categoryCode,omitempty"`
    CcEmailAddresses []string `json:"ccEmailAddresses,omitempty"`
    DisplayID *string `json:"displayId,omitempty"`
    Language *string `json:"language,omitempty"`
    RecentCommunications *RecentCaseCommunications `json:"recentCommunications,omitempty"`
    ServiceCode *string `json:"serviceCode,omitempty"`
    SeverityCode *string `json:"severityCode,omitempty"`
    Status *string `json:"status,omitempty"`
    Subject *string `json:"subject,omitempty"`
    SubmittedBy *string `json:"submittedBy,omitempty"`
    TimeCreated *string `json:"timeCreated,omitempty"`
    
}

