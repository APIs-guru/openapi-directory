package shared

type ExportJobResponse struct {
	ApplicationID   string            `json:"ApplicationId"`
	CompletedPieces *int64            `json:"CompletedPieces"`
	CompletionDate  *string           `json:"CompletionDate"`
	CreationDate    string            `json:"CreationDate"`
	Definition      ExportJobResource `json:"Definition"`
	FailedPieces    *int64            `json:"FailedPieces"`
	Failures        []string          `json:"Failures"`
	ID              string            `json:"Id"`
	JobStatus       JobStatusEnum     `json:"JobStatus"`
	TotalFailures   *int64            `json:"TotalFailures"`
	TotalPieces     *int64            `json:"TotalPieces"`
	TotalProcessed  *int64            `json:"TotalProcessed"`
	Type            string            `json:"Type"`
}
