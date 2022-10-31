package shared



type AssociateQualificationWithWorkerRequest struct {
    IntegerValue *int64 `json:"IntegerValue,omitempty"`
    QualificationTypeID string `json:"QualificationTypeId"`
    SendNotification *bool `json:"SendNotification,omitempty"`
    WorkerID string `json:"WorkerId"`
    
}

