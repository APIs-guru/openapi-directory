package shared



type DescribeReplicationConfigurationTemplatesResponse struct {
    Items []ReplicationConfigurationTemplate `json:"items,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

