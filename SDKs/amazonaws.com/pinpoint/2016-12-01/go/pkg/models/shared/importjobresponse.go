package shared

// ImportJobResponse
// Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
type ImportJobResponse struct {
	ApplicationID   string            `json:"ApplicationId"`
	CompletedPieces *int64            `json:"CompletedPieces,omitempty"`
	CompletionDate  *string           `json:"CompletionDate,omitempty"`
	CreationDate    string            `json:"CreationDate"`
	Definition      ImportJobResource `json:"Definition"`
	FailedPieces    *int64            `json:"FailedPieces,omitempty"`
	Failures        []string          `json:"Failures,omitempty"`
	ID              string            `json:"Id"`
	JobStatus       JobStatusEnum     `json:"JobStatus"`
	TotalFailures   *int64            `json:"TotalFailures,omitempty"`
	TotalPieces     *int64            `json:"TotalPieces,omitempty"`
	TotalProcessed  *int64            `json:"TotalProcessed,omitempty"`
	Type            string            `json:"Type"`
}
