package shared

type ListDatasetsResponse struct {
	Datasets      []Dataset `json:"datasets"`
	NextPageToken *string   `json:"nextPageToken"`
}
