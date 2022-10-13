package shared

type BatchPredictInputConfig struct {
	BigquerySource *BigQuerySource `json:"bigquerySource"`
	GcsSource      *GcsSource      `json:"gcsSource"`
}
