package shared

type DescribedExecution struct {
	ExecutionID          *string               `json:"ExecutionId"`
	ExecutionRole        *string               `json:"ExecutionRole"`
	InitialFileLocation  *FileLocation         `json:"InitialFileLocation"`
	LoggingConfiguration *LoggingConfiguration `json:"LoggingConfiguration"`
	PosixProfile         *PosixProfile         `json:"PosixProfile"`
	Results              *ExecutionResults     `json:"Results"`
	ServiceMetadata      *ServiceMetadata      `json:"ServiceMetadata"`
	Status               *ExecutionStatusEnum  `json:"Status"`
}
