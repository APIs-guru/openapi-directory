package shared

// ListDatasetsResponse
// Response message for AutoMl.ListDatasets.
type ListDatasetsResponse struct {
	Datasets      []Dataset `json:"datasets,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
