package shared

type AssignmentJobTypeEnum string

const (
	AssignmentJobTypeEnumJobTypeUnspecified AssignmentJobTypeEnum = "JOB_TYPE_UNSPECIFIED"
	AssignmentJobTypeEnumPipeline           AssignmentJobTypeEnum = "PIPELINE"
	AssignmentJobTypeEnumQuery              AssignmentJobTypeEnum = "QUERY"
	AssignmentJobTypeEnumMlExternal         AssignmentJobTypeEnum = "ML_EXTERNAL"
	AssignmentJobTypeEnumBackground         AssignmentJobTypeEnum = "BACKGROUND"
)

type AssignmentStateEnum string

const (
	AssignmentStateEnumStateUnspecified AssignmentStateEnum = "STATE_UNSPECIFIED"
	AssignmentStateEnumPending          AssignmentStateEnum = "PENDING"
	AssignmentStateEnumActive           AssignmentStateEnum = "ACTIVE"
)

type Assignment struct {
	Assignee *string                `json:"assignee"`
	JobType  *AssignmentJobTypeEnum `json:"jobType"`
	Name     *string                `json:"name"`
	State    *AssignmentStateEnum   `json:"state"`
}
