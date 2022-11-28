package shared

// DatasetSchema
// Provides information about the data schema used with the given dataset.
type DatasetSchema struct {
	InlineDataSchema *string `json:"InlineDataSchema,omitempty"`
}
