package shared

type GetReplicationRunsResponse struct {
	NextToken          *string          `json:"nextToken,omitempty"`
	ReplicationJob     *ReplicationJob  `json:"replicationJob,omitempty"`
	ReplicationRunList []ReplicationRun `json:"replicationRunList,omitempty"`
}
