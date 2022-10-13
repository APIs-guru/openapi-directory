package shared

type WorkerConfigurationDescription struct {
	Revision               *int64  `json:"revision"`
	WorkerConfigurationArn *string `json:"workerConfigurationArn"`
}
