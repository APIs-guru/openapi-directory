package shared

type GetReplicationJobsRequest struct {
	MaxResults       *int64  `json:"maxResults"`
	NextToken        *string `json:"nextToken"`
	ReplicationJobID *string `json:"replicationJobId"`
}
