package shared

type ListDatabasesRequest struct {
	ClusterIdentifier string  `json:"ClusterIdentifier"`
	Database          string  `json:"Database"`
	DbUser            *string `json:"DbUser"`
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	SecretArn         *string `json:"SecretArn"`
}
