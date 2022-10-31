package shared

type ListClustersResponse struct {
	Clusters  []Cluster `json:"Clusters,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
