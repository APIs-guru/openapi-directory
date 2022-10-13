package shared

type GetInstancesResult struct {
	Instances     []Instance `json:"instances"`
	NextPageToken *string    `json:"nextPageToken"`
}
