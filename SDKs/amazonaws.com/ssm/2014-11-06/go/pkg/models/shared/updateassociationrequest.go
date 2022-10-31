package shared



type UpdateAssociationRequest struct {
    ApplyOnlyAtCronInterval *bool `json:"ApplyOnlyAtCronInterval,omitempty"`
    AssociationID string `json:"AssociationId"`
    AssociationName *string `json:"AssociationName,omitempty"`
    AssociationVersion *string `json:"AssociationVersion,omitempty"`
    AutomationTargetParameterName *string `json:"AutomationTargetParameterName,omitempty"`
    CalendarNames []string `json:"CalendarNames,omitempty"`
    ComplianceSeverity *AssociationComplianceSeverityEnum `json:"ComplianceSeverity,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    MaxConcurrency *string `json:"MaxConcurrency,omitempty"`
    MaxErrors *string `json:"MaxErrors,omitempty"`
    Name *string `json:"Name,omitempty"`
    OutputLocation *InstanceAssociationOutputLocation `json:"OutputLocation,omitempty"`
    Parameters map[string][]string `json:"Parameters,omitempty"`
    ScheduleExpression *string `json:"ScheduleExpression,omitempty"`
    SyncCompliance *AssociationSyncComplianceEnum `json:"SyncCompliance,omitempty"`
    TargetLocations []TargetLocation `json:"TargetLocations,omitempty"`
    Targets []Target `json:"Targets,omitempty"`
    
}

