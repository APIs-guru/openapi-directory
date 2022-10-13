package shared

type ListedExecution struct {
	ExecutionID         *string              `json:"ExecutionId"`
	InitialFileLocation *FileLocation        `json:"InitialFileLocation"`
	ServiceMetadata     *ServiceMetadata     `json:"ServiceMetadata"`
	Status              *ExecutionStatusEnum `json:"Status"`
}
