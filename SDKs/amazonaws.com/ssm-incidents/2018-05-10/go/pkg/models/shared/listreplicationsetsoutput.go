package shared

type ListReplicationSetsOutput struct {
	NextToken          *string  `json:"nextToken,omitempty"`
	ReplicationSetArns []string `json:"replicationSetArns"`
}
