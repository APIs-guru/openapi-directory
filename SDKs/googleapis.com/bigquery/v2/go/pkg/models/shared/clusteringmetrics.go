package shared

// ClusteringMetrics
// Evaluation metrics for clustering models.
type ClusteringMetrics struct {
	Clusters            []Cluster `json:"clusters,omitempty"`
	DaviesBouldinIndex  *float64  `json:"daviesBouldinIndex,omitempty"`
	MeanSquaredDistance *float64  `json:"meanSquaredDistance,omitempty"`
}
