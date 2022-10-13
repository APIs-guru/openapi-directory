package shared

type AssociateQualificationWithWorkerRequest struct {
	IntegerValue        *int64 `json:"IntegerValue"`
	QualificationTypeID string `json:"QualificationTypeId"`
	SendNotification    *bool  `json:"SendNotification"`
	WorkerID            string `json:"WorkerId"`
}
