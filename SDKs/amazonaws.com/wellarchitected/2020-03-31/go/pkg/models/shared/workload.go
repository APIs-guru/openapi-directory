package shared

import (
	"time"
)

// Workload
// A workload return object.
type Workload struct {
	AccountIds                      []string                       `json:"AccountIds,omitempty"`
	ArchitecturalDesign             *string                        `json:"ArchitecturalDesign,omitempty"`
	AwsRegions                      []string                       `json:"AwsRegions,omitempty"`
	Description                     *string                        `json:"Description,omitempty"`
	Environment                     *WorkloadEnvironmentEnum       `json:"Environment,omitempty"`
	ImprovementStatus               *WorkloadImprovementStatusEnum `json:"ImprovementStatus,omitempty"`
	Industry                        *string                        `json:"Industry,omitempty"`
	IndustryType                    *string                        `json:"IndustryType,omitempty"`
	IsReviewOwnerUpdateAcknowledged *bool                          `json:"IsReviewOwnerUpdateAcknowledged,omitempty"`
	Lenses                          []string                       `json:"Lenses,omitempty"`
	NonAwsRegions                   []string                       `json:"NonAwsRegions,omitempty"`
	Notes                           *string                        `json:"Notes,omitempty"`
	Owner                           *string                        `json:"Owner,omitempty"`
	PillarPriorities                []string                       `json:"PillarPriorities,omitempty"`
	ReviewOwner                     *string                        `json:"ReviewOwner,omitempty"`
	ReviewRestrictionDate           *time.Time                     `json:"ReviewRestrictionDate,omitempty"`
	RiskCounts                      map[string]int64               `json:"RiskCounts,omitempty"`
	ShareInvitationID               *string                        `json:"ShareInvitationId,omitempty"`
	Tags                            map[string]string              `json:"Tags,omitempty"`
	UpdatedAt                       *time.Time                     `json:"UpdatedAt,omitempty"`
	WorkloadArn                     *string                        `json:"WorkloadArn,omitempty"`
	WorkloadID                      *string                        `json:"WorkloadId,omitempty"`
	WorkloadName                    *string                        `json:"WorkloadName,omitempty"`
}
