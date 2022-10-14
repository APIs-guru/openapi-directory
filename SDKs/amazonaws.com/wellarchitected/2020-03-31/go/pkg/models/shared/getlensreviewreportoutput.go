package shared

type GetLensReviewReportOutput struct {
	LensReviewReport *LensReviewReport `json:"LensReviewReport,omitempty"`
	MilestoneNumber  *int64            `json:"MilestoneNumber,omitempty"`
	WorkloadID       *string           `json:"WorkloadId,omitempty"`
}
