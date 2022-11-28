package shared

type AssignmentJobTypeEnum string

const (
	AssignmentJobTypeEnumJobTypeUnspecified AssignmentJobTypeEnum = "JOB_TYPE_UNSPECIFIED"
	AssignmentJobTypeEnumPipeline           AssignmentJobTypeEnum = "PIPELINE"
	AssignmentJobTypeEnumQuery              AssignmentJobTypeEnum = "QUERY"
	AssignmentJobTypeEnumMlExternal         AssignmentJobTypeEnum = "ML_EXTERNAL"
)

type AssignmentStateEnum string

const (
	AssignmentStateEnumStateUnspecified AssignmentStateEnum = "STATE_UNSPECIFIED"
	AssignmentStateEnumPending          AssignmentStateEnum = "PENDING"
	AssignmentStateEnumActive           AssignmentStateEnum = "ACTIVE"
)

// AssignmentInput
// An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
type AssignmentInput struct {
	Assignee *string                `json:"assignee,omitempty"`
	JobType  *AssignmentJobTypeEnum `json:"jobType,omitempty"`
}

// Assignment
// An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
type Assignment struct {
	Assignee *string                `json:"assignee,omitempty"`
	JobType  *AssignmentJobTypeEnum `json:"jobType,omitempty"`
	Name     *string                `json:"name,omitempty"`
	State    *AssignmentStateEnum   `json:"state,omitempty"`
}
