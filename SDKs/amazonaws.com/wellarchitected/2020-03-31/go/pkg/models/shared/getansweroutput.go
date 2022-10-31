package shared

type GetAnswerOutput struct {
	Answer          *Answer `json:"Answer,omitempty"`
	LensAlias       *string `json:"LensAlias,omitempty"`
	MilestoneNumber *int64  `json:"MilestoneNumber,omitempty"`
	WorkloadID      *string `json:"WorkloadId,omitempty"`
}
