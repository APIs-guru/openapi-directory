package shared

// ListedExecution
// Returns properties of the execution that is specified.
type ListedExecution struct {
	ExecutionID         *string              `json:"ExecutionId,omitempty"`
	InitialFileLocation *FileLocation        `json:"InitialFileLocation,omitempty"`
	ServiceMetadata     *ServiceMetadata     `json:"ServiceMetadata,omitempty"`
	Status              *ExecutionStatusEnum `json:"Status,omitempty"`
}
