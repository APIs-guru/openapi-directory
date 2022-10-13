package shared

type UpdateAssociationRequest struct {
	ApplyOnlyAtCronInterval       *bool                              `json:"ApplyOnlyAtCronInterval"`
	AssociationID                 string                             `json:"AssociationId"`
	AssociationName               *string                            `json:"AssociationName"`
	AssociationVersion            *string                            `json:"AssociationVersion"`
	AutomationTargetParameterName *string                            `json:"AutomationTargetParameterName"`
	CalendarNames                 []string                           `json:"CalendarNames"`
	ComplianceSeverity            *AssociationComplianceSeverityEnum `json:"ComplianceSeverity"`
	DocumentVersion               *string                            `json:"DocumentVersion"`
	MaxConcurrency                *string                            `json:"MaxConcurrency"`
	MaxErrors                     *string                            `json:"MaxErrors"`
	Name                          *string                            `json:"Name"`
	OutputLocation                *InstanceAssociationOutputLocation `json:"OutputLocation"`
	Parameters                    map[string][]string                `json:"Parameters"`
	ScheduleExpression            *string                            `json:"ScheduleExpression"`
	SyncCompliance                *AssociationSyncComplianceEnum     `json:"SyncCompliance"`
	TargetLocations               []TargetLocation                   `json:"TargetLocations"`
	Targets                       []Target                           `json:"Targets"`
}
