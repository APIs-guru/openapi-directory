package shared

type ListedExecution struct {
	ExecutionID         *string              `json:"ExecutionId,omitempty"`
	InitialFileLocation *FileLocation        `json:"InitialFileLocation,omitempty"`
	ServiceMetadata     *ServiceMetadata     `json:"ServiceMetadata,omitempty"`
	Status              *ExecutionStatusEnum `json:"Status,omitempty"`
}
