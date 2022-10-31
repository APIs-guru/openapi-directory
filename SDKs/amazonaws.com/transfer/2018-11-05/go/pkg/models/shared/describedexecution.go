package shared

type DescribedExecution struct {
	ExecutionID          *string               `json:"ExecutionId,omitempty"`
	ExecutionRole        *string               `json:"ExecutionRole,omitempty"`
	InitialFileLocation  *FileLocation         `json:"InitialFileLocation,omitempty"`
	LoggingConfiguration *LoggingConfiguration `json:"LoggingConfiguration,omitempty"`
	PosixProfile         *PosixProfile         `json:"PosixProfile,omitempty"`
	Results              *ExecutionResults     `json:"Results,omitempty"`
	ServiceMetadata      *ServiceMetadata      `json:"ServiceMetadata,omitempty"`
	Status               *ExecutionStatusEnum  `json:"Status,omitempty"`
}
