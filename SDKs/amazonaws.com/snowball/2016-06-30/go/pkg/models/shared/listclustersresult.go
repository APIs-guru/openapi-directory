package shared

type ListClustersResult struct {
	ClusterListEntries []ClusterListEntry `json:"ClusterListEntries"`
	NextToken          *string            `json:"NextToken"`
}
