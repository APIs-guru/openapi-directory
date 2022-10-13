package shared

type IncidentRecordSource struct {
	CreatedBy   string  `json:"createdBy"`
	InvokedBy   *string `json:"invokedBy"`
	ResourceArn *string `json:"resourceArn"`
	Source      string  `json:"source"`
}
