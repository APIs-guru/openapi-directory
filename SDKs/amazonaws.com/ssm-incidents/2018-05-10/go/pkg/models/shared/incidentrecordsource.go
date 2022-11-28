package shared

// IncidentRecordSource
// Details about how the incident record was created and when.
type IncidentRecordSource struct {
	CreatedBy   string  `json:"createdBy"`
	InvokedBy   *string `json:"invokedBy,omitempty"`
	ResourceArn *string `json:"resourceArn,omitempty"`
	Source      string  `json:"source"`
}
