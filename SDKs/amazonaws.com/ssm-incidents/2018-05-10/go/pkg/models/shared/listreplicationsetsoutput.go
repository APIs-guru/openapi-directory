package shared

type ListReplicationSetsOutput struct {
	NextToken          *string  `json:"nextToken"`
	ReplicationSetArns []string `json:"replicationSetArns"`
}
