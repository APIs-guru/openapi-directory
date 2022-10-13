package shared

type InputConfig struct {
	BigquerySource *BigQuerySource   `json:"bigquerySource"`
	GcsSource      *GcsSource        `json:"gcsSource"`
	Params         map[string]string `json:"params"`
}
