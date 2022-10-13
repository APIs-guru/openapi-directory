package shared

type ModelExportOutputConfig struct {
	GcrDestination *GcrDestination   `json:"gcrDestination"`
	GcsDestination *GcsDestination   `json:"gcsDestination"`
	ModelFormat    *string           `json:"modelFormat"`
	Params         map[string]string `json:"params"`
}
