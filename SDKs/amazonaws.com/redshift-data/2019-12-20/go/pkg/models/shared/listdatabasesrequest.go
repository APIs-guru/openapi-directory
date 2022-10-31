package shared

type ListDatabasesRequest struct {
	ClusterIdentifier string  `json:"ClusterIdentifier"`
	Database          string  `json:"Database"`
	DbUser            *string `json:"DbUser,omitempty"`
	MaxResults        *int64  `json:"MaxResults,omitempty"`
	NextToken         *string `json:"NextToken,omitempty"`
	SecretArn         *string `json:"SecretArn,omitempty"`
}
