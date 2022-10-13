package shared

type DescribeTableRequest struct {
	ClusterIdentifier string  `json:"ClusterIdentifier"`
	ConnectedDatabase *string `json:"ConnectedDatabase"`
	Database          string  `json:"Database"`
	DbUser            *string `json:"DbUser"`
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	Schema            *string `json:"Schema"`
	SecretArn         *string `json:"SecretArn"`
	Table             *string `json:"Table"`
}
