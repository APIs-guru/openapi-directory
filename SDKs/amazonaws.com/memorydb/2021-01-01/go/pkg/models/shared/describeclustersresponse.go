package shared

type DescribeClustersResponse struct {
	Clusters  []Cluster `json:"Clusters"`
	NextToken *string   `json:"NextToken"`
}
