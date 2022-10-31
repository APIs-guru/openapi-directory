package shared

type InputConfig struct {
	BigquerySource *BigQuerySource   `json:"bigquerySource,omitempty"`
	GcsSource      *GcsSource        `json:"gcsSource,omitempty"`
	Params         map[string]string `json:"params,omitempty"`
}
