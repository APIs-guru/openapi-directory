package shared



type GetReplicationJobsRequest struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ReplicationJobID *string `json:"replicationJobId,omitempty"`
    
}

