package shared

import (
"time")

type AssociationDescription struct {
    ApplyOnlyAtCronInterval *bool `json:"ApplyOnlyAtCronInterval,omitempty"`
    AssociationID *string `json:"AssociationId,omitempty"`
    AssociationName *string `json:"AssociationName,omitempty"`
    AssociationVersion *string `json:"AssociationVersion,omitempty"`
    AutomationTargetParameterName *string `json:"AutomationTargetParameterName,omitempty"`
    CalendarNames []string `json:"CalendarNames,omitempty"`
    ComplianceSeverity *AssociationComplianceSeverityEnum `json:"ComplianceSeverity,omitempty"`
    Date *time.Time `json:"Date,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    LastExecutionDate *time.Time `json:"LastExecutionDate,omitempty"`
    LastSuccessfulExecutionDate *time.Time `json:"LastSuccessfulExecutionDate,omitempty"`
    LastUpdateAssociationDate *time.Time `json:"LastUpdateAssociationDate,omitempty"`
    MaxConcurrency *string `json:"MaxConcurrency,omitempty"`
    MaxErrors *string `json:"MaxErrors,omitempty"`
    Name *string `json:"Name,omitempty"`
    OutputLocation *InstanceAssociationOutputLocation `json:"OutputLocation,omitempty"`
    Overview *AssociationOverview `json:"Overview,omitempty"`
    Parameters map[string][]string `json:"Parameters,omitempty"`
    ScheduleExpression *string `json:"ScheduleExpression,omitempty"`
    Status *AssociationStatus `json:"Status,omitempty"`
    SyncCompliance *AssociationSyncComplianceEnum `json:"SyncCompliance,omitempty"`
    TargetLocations []TargetLocation `json:"TargetLocations,omitempty"`
    Targets []Target `json:"Targets,omitempty"`
    
}

