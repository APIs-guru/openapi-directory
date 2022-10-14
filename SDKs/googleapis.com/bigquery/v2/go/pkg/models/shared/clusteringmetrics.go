package shared

type ClusteringMetrics struct {
	Clusters            []Cluster `json:"clusters,omitempty"`
	DaviesBouldinIndex  *float64  `json:"daviesBouldinIndex,omitempty"`
	MeanSquaredDistance *float64  `json:"meanSquaredDistance,omitempty"`
}
