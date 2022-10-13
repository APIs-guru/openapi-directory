package shared

type DestinationDataset struct {
	DatasetReference *DestinationDatasetReference `json:"datasetReference"`
	Description      *string                      `json:"description"`
	FriendlyName     *string                      `json:"friendlyName"`
	Labels           map[string]string            `json:"labels"`
	Location         *string                      `json:"location"`
}
