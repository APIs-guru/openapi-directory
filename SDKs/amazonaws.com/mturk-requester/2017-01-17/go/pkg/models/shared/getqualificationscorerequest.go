package shared

type GetQualificationScoreRequest struct {
	QualificationTypeID string `json:"QualificationTypeId"`
	WorkerID            string `json:"WorkerId"`
}
