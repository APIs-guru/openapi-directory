package shared

type ModelExportOutputConfig struct {
	GcrDestination *GcrDestination   `json:"gcrDestination,omitempty"`
	GcsDestination *GcsDestination   `json:"gcsDestination,omitempty"`
	ModelFormat    *string           `json:"modelFormat,omitempty"`
	Params         map[string]string `json:"params,omitempty"`
}
