package shared

type ListInstancesResponse struct {
	Instances     []Instance `json:"instances"`
	NextPageToken *string    `json:"nextPageToken"`
}
