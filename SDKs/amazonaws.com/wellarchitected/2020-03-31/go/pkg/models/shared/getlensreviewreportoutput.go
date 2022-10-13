package shared

type GetLensReviewReportOutput struct {
	LensReviewReport *LensReviewReport `json:"LensReviewReport"`
	MilestoneNumber  *int64            `json:"MilestoneNumber"`
	WorkloadID       *string           `json:"WorkloadId"`
}
