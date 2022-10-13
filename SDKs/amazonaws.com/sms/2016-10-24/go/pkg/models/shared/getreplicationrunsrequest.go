package shared

type GetReplicationRunsRequest struct {
	MaxResults       *int64  `json:"maxResults"`
	NextToken        *string `json:"nextToken"`
	ReplicationJobID string  `json:"replicationJobId"`
}
