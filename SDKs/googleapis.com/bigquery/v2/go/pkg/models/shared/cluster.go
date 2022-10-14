package shared

type Cluster struct {
	CentroidID    *string        `json:"centroidId,omitempty"`
	Count         *string        `json:"count,omitempty"`
	FeatureValues []FeatureValue `json:"featureValues,omitempty"`
}
