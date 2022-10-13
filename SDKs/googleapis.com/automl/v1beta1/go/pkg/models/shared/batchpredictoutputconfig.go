package shared

type BatchPredictOutputConfig struct {
	BigqueryDestination *BigQueryDestination `json:"bigqueryDestination"`
	GcsDestination      *GcsDestination      `json:"gcsDestination"`
}
