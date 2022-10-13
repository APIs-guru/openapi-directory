package shared

type GetReplicationRunsResponse struct {
	NextToken          *string          `json:"nextToken"`
	ReplicationJob     *ReplicationJob  `json:"replicationJob"`
	ReplicationRunList []ReplicationRun `json:"replicationRunList"`
}
