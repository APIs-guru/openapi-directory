package shared

type ListClustersResponse struct {
	Clusters        []Cluster `json:"clusters"`
	FailedLocations []string  `json:"failedLocations"`
	NextPageToken   *string   `json:"nextPageToken"`
}
