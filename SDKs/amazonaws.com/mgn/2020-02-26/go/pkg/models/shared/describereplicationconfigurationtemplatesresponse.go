package shared

type DescribeReplicationConfigurationTemplatesResponse struct {
	Items     []ReplicationConfigurationTemplate `json:"items"`
	NextToken *string                            `json:"nextToken"`
}
