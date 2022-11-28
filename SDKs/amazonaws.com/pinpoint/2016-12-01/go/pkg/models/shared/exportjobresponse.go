package shared

// ExportJobResponse
// Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
type ExportJobResponse struct {
	ApplicationID   string            `json:"ApplicationId"`
	CompletedPieces *int64            `json:"CompletedPieces,omitempty"`
	CompletionDate  *string           `json:"CompletionDate,omitempty"`
	CreationDate    string            `json:"CreationDate"`
	Definition      ExportJobResource `json:"Definition"`
	FailedPieces    *int64            `json:"FailedPieces,omitempty"`
	Failures        []string          `json:"Failures,omitempty"`
	ID              string            `json:"Id"`
	JobStatus       JobStatusEnum     `json:"JobStatus"`
	TotalFailures   *int64            `json:"TotalFailures,omitempty"`
	TotalPieces     *int64            `json:"TotalPieces,omitempty"`
	TotalProcessed  *int64            `json:"TotalProcessed,omitempty"`
	Type            string            `json:"Type"`
}
