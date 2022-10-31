package shared



type RejectQualificationRequestRequest struct {
    QualificationRequestID string `json:"QualificationRequestId"`
    Reason *string `json:"Reason,omitempty"`
    
}

