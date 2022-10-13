package shared

type DisassociateQualificationFromWorkerRequest struct {
	QualificationTypeID string  `json:"QualificationTypeId"`
	Reason              *string `json:"Reason"`
	WorkerID            string  `json:"WorkerId"`
}
