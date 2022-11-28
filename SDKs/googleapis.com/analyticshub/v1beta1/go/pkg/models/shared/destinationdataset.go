package shared

// DestinationDataset
// Defines the destination bigquery dataset.
type DestinationDataset struct {
	DatasetReference *DestinationDatasetReference `json:"datasetReference,omitempty"`
	Description      *string                      `json:"description,omitempty"`
	FriendlyName     *string                      `json:"friendlyName,omitempty"`
	Labels           map[string]string            `json:"labels,omitempty"`
	Location         *string                      `json:"location,omitempty"`
}
