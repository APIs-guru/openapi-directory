package shared

import (
	"time"
)

type AssociationDescription struct {
	ApplyOnlyAtCronInterval       *bool                              `json:"ApplyOnlyAtCronInterval"`
	AssociationID                 *string                            `json:"AssociationId"`
	AssociationName               *string                            `json:"AssociationName"`
	AssociationVersion            *string                            `json:"AssociationVersion"`
	AutomationTargetParameterName *string                            `json:"AutomationTargetParameterName"`
	CalendarNames                 []string                           `json:"CalendarNames"`
	ComplianceSeverity            *AssociationComplianceSeverityEnum `json:"ComplianceSeverity"`
	Date                          *time.Time                         `json:"Date"`
	DocumentVersion               *string                            `json:"DocumentVersion"`
	InstanceID                    *string                            `json:"InstanceId"`
	LastExecutionDate             *time.Time                         `json:"LastExecutionDate"`
	LastSuccessfulExecutionDate   *time.Time                         `json:"LastSuccessfulExecutionDate"`
	LastUpdateAssociationDate     *time.Time                         `json:"LastUpdateAssociationDate"`
	MaxConcurrency                *string                            `json:"MaxConcurrency"`
	MaxErrors                     *string                            `json:"MaxErrors"`
	Name                          *string                            `json:"Name"`
	OutputLocation                *InstanceAssociationOutputLocation `json:"OutputLocation"`
	Overview                      *AssociationOverview               `json:"Overview"`
	Parameters                    map[string][]string                `json:"Parameters"`
	ScheduleExpression            *string                            `json:"ScheduleExpression"`
	Status                        *AssociationStatus                 `json:"Status"`
	SyncCompliance                *AssociationSyncComplianceEnum     `json:"SyncCompliance"`
	TargetLocations               []TargetLocation                   `json:"TargetLocations"`
	Targets                       []Target                           `json:"Targets"`
}
