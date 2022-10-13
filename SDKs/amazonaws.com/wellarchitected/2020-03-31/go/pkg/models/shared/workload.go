package shared

import (
	"time"
)

type Workload struct {
	AccountIds                      []string                       `json:"AccountIds"`
	ArchitecturalDesign             *string                        `json:"ArchitecturalDesign"`
	AwsRegions                      []string                       `json:"AwsRegions"`
	Description                     *string                        `json:"Description"`
	Environment                     *WorkloadEnvironmentEnum       `json:"Environment"`
	ImprovementStatus               *WorkloadImprovementStatusEnum `json:"ImprovementStatus"`
	Industry                        *string                        `json:"Industry"`
	IndustryType                    *string                        `json:"IndustryType"`
	IsReviewOwnerUpdateAcknowledged *bool                          `json:"IsReviewOwnerUpdateAcknowledged"`
	Lenses                          []string                       `json:"Lenses"`
	NonAwsRegions                   []string                       `json:"NonAwsRegions"`
	Notes                           *string                        `json:"Notes"`
	Owner                           *string                        `json:"Owner"`
	PillarPriorities                []string                       `json:"PillarPriorities"`
	ReviewOwner                     *string                        `json:"ReviewOwner"`
	ReviewRestrictionDate           *time.Time                     `json:"ReviewRestrictionDate"`
	RiskCounts                      map[string]int64               `json:"RiskCounts"`
	ShareInvitationID               *string                        `json:"ShareInvitationId"`
	Tags                            map[string]string              `json:"Tags"`
	UpdatedAt                       *time.Time                     `json:"UpdatedAt"`
	WorkloadArn                     *string                        `json:"WorkloadArn"`
	WorkloadID                      *string                        `json:"WorkloadId"`
	WorkloadName                    *string                        `json:"WorkloadName"`
}
