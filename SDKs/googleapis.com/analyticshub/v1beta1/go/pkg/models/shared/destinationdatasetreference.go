package shared

// DestinationDatasetReference
// Contains the reference that identifies a destination bigquery dataset.
type DestinationDatasetReference struct {
	DatasetID *string `json:"datasetId,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
