package shared



type DescribeClustersResponse struct {
    Clusters []Cluster `json:"Clusters,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

