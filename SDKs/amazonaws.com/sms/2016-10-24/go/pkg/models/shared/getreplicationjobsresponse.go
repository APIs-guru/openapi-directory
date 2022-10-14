package shared

type GetReplicationJobsResponse struct {
	NextToken          *string          `json:"nextToken,omitempty"`
	ReplicationJobList []ReplicationJob `json:"replicationJobList,omitempty"`
}
