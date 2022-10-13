package shared

type GetAnswerOutput struct {
	Answer          *Answer `json:"Answer"`
	LensAlias       *string `json:"LensAlias"`
	MilestoneNumber *int64  `json:"MilestoneNumber"`
	WorkloadID      *string `json:"WorkloadId"`
}
