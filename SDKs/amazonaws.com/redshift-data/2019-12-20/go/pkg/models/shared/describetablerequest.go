package shared

type DescribeTableRequest struct {
	ClusterIdentifier string  `json:"ClusterIdentifier"`
	ConnectedDatabase *string `json:"ConnectedDatabase,omitempty"`
	Database          string  `json:"Database"`
	DbUser            *string `json:"DbUser,omitempty"`
	MaxResults        *int64  `json:"MaxResults,omitempty"`
	NextToken         *string `json:"NextToken,omitempty"`
	Schema            *string `json:"Schema,omitempty"`
	SecretArn         *string `json:"SecretArn,omitempty"`
	Table             *string `json:"Table,omitempty"`
}
