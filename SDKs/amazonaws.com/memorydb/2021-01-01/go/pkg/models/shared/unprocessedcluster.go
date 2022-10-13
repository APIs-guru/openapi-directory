package shared

type UnprocessedCluster struct {
	ClusterName  *string `json:"ClusterName"`
	ErrorMessage *string `json:"ErrorMessage"`
	ErrorType    *string `json:"ErrorType"`
}
