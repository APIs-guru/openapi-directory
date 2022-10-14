package shared

type CapacityCommitmentPlanEnum string

const (
	CapacityCommitmentPlanEnumCommitmentPlanUnspecified CapacityCommitmentPlanEnum = "COMMITMENT_PLAN_UNSPECIFIED"
	CapacityCommitmentPlanEnumFlex                      CapacityCommitmentPlanEnum = "FLEX"
	CapacityCommitmentPlanEnumTrial                     CapacityCommitmentPlanEnum = "TRIAL"
	CapacityCommitmentPlanEnumMonthly                   CapacityCommitmentPlanEnum = "MONTHLY"
	CapacityCommitmentPlanEnumAnnual                    CapacityCommitmentPlanEnum = "ANNUAL"
)

type CapacityCommitmentRenewalPlanEnum string

const (
	CapacityCommitmentRenewalPlanEnumCommitmentPlanUnspecified CapacityCommitmentRenewalPlanEnum = "COMMITMENT_PLAN_UNSPECIFIED"
	CapacityCommitmentRenewalPlanEnumFlex                      CapacityCommitmentRenewalPlanEnum = "FLEX"
	CapacityCommitmentRenewalPlanEnumTrial                     CapacityCommitmentRenewalPlanEnum = "TRIAL"
	CapacityCommitmentRenewalPlanEnumMonthly                   CapacityCommitmentRenewalPlanEnum = "MONTHLY"
	CapacityCommitmentRenewalPlanEnumAnnual                    CapacityCommitmentRenewalPlanEnum = "ANNUAL"
)

type CapacityCommitmentStateEnum string

const (
	CapacityCommitmentStateEnumStateUnspecified CapacityCommitmentStateEnum = "STATE_UNSPECIFIED"
	CapacityCommitmentStateEnumPending          CapacityCommitmentStateEnum = "PENDING"
	CapacityCommitmentStateEnumActive           CapacityCommitmentStateEnum = "ACTIVE"
	CapacityCommitmentStateEnumFailed           CapacityCommitmentStateEnum = "FAILED"
)

type CapacityCommitment struct {
	CommitmentEndTime    *string                            `json:"commitmentEndTime,omitempty"`
	CommitmentStartTime  *string                            `json:"commitmentStartTime,omitempty"`
	FailureStatus        *Status                            `json:"failureStatus,omitempty"`
	MultiRegionAuxiliary *bool                              `json:"multiRegionAuxiliary,omitempty"`
	Name                 *string                            `json:"name,omitempty"`
	Plan                 *CapacityCommitmentPlanEnum        `json:"plan,omitempty"`
	RenewalPlan          *CapacityCommitmentRenewalPlanEnum `json:"renewalPlan,omitempty"`
	SlotCount            *string                            `json:"slotCount,omitempty"`
	State                *CapacityCommitmentStateEnum       `json:"state,omitempty"`
}
