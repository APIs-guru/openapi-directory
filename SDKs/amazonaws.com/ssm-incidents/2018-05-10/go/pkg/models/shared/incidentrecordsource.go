package shared



type IncidentRecordSource struct {
    CreatedBy string `json:"createdBy"`
    InvokedBy *string `json:"invokedBy,omitempty"`
    ResourceArn *string `json:"resourceArn,omitempty"`
    Source string `json:"source"`
    
}

