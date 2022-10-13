package shared

type Cluster struct {
	CentroidID    *string        `json:"centroidId"`
	Count         *string        `json:"count"`
	FeatureValues []FeatureValue `json:"featureValues"`
}
