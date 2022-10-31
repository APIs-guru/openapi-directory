package shared



type ListIncidentRecordsOutput struct {
    IncidentRecordSummaries []IncidentRecordSummary `json:"incidentRecordSummaries"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

