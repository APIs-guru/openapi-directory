package shared

// UnprocessedCluster
// A cluster whose updates have failed
type UnprocessedCluster struct {
	ClusterName  *string `json:"ClusterName,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	ErrorType    *string `json:"ErrorType,omitempty"`
}
