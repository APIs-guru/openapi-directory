package shared

type GetReplicationJobsResponse struct {
	NextToken          *string          `json:"nextToken"`
	ReplicationJobList []ReplicationJob `json:"replicationJobList"`
}
