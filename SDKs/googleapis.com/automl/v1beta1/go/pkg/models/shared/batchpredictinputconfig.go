package shared

type BatchPredictInputConfig struct {
	BigquerySource *BigQuerySource `json:"bigquerySource,omitempty"`
	GcsSource      *GcsSource      `json:"gcsSource,omitempty"`
}
