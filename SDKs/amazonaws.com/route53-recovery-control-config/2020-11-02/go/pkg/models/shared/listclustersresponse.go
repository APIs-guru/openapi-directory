package shared

type ListClustersResponse struct {
	Clusters  []Cluster `json:"Clusters"`
	NextToken *string   `json:"NextToken"`
}
