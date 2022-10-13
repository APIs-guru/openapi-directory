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
	CommitmentEndTime    *string                            `json:"commitmentEndTime"`
	CommitmentStartTime  *string                            `json:"commitmentStartTime"`
	FailureStatus        *Status                            `json:"failureStatus"`
	MultiRegionAuxiliary *bool                              `json:"multiRegionAuxiliary"`
	Name                 *string                            `json:"name"`
	Plan                 *CapacityCommitmentPlanEnum        `json:"plan"`
	RenewalPlan          *CapacityCommitmentRenewalPlanEnum `json:"renewalPlan"`
	SlotCount            *string                            `json:"slotCount"`
	State                *CapacityCommitmentStateEnum       `json:"state"`
}
