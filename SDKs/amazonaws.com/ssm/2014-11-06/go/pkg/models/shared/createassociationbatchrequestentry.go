package shared

type CreateAssociationBatchRequestEntry struct {
	ApplyOnlyAtCronInterval       *bool                              `json:"ApplyOnlyAtCronInterval"`
	AssociationName               *string                            `json:"AssociationName"`
	AutomationTargetParameterName *string                            `json:"AutomationTargetParameterName"`
	CalendarNames                 []string                           `json:"CalendarNames"`
	ComplianceSeverity            *AssociationComplianceSeverityEnum `json:"ComplianceSeverity"`
	DocumentVersion               *string                            `json:"DocumentVersion"`
	InstanceID                    *string                            `json:"InstanceId"`
	MaxConcurrency                *string                            `json:"MaxConcurrency"`
	MaxErrors                     *string                            `json:"MaxErrors"`
	Name                          string                             `json:"Name"`
	OutputLocation                *InstanceAssociationOutputLocation `json:"OutputLocation"`
	Parameters                    map[string][]string                `json:"Parameters"`
	ScheduleExpression            *string                            `json:"ScheduleExpression"`
	SyncCompliance                *AssociationSyncComplianceEnum     `json:"SyncCompliance"`
	TargetLocations               []TargetLocation                   `json:"TargetLocations"`
	Targets                       []Target                           `json:"Targets"`
}
