package shared



type DisassociateQualificationFromWorkerRequest struct {
    QualificationTypeID string `json:"QualificationTypeId"`
    Reason *string `json:"Reason,omitempty"`
    WorkerID string `json:"WorkerId"`
    
}

