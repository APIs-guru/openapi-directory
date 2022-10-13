package shared

type ClusteringMetrics struct {
	Clusters            []Cluster `json:"clusters"`
	DaviesBouldinIndex  *float64  `json:"daviesBouldinIndex"`
	MeanSquaredDistance *float64  `json:"meanSquaredDistance"`
}
