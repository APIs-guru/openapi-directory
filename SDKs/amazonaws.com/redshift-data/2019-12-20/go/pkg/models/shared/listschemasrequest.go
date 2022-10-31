package shared

type ListSchemasRequest struct {
	ClusterIdentifier string  `json:"ClusterIdentifier"`
	ConnectedDatabase *string `json:"ConnectedDatabase,omitempty"`
	Database          string  `json:"Database"`
	DbUser            *string `json:"DbUser,omitempty"`
	MaxResults        *int64  `json:"MaxResults,omitempty"`
	NextToken         *string `json:"NextToken,omitempty"`
	SchemaPattern     *string `json:"SchemaPattern,omitempty"`
	SecretArn         *string `json:"SecretArn,omitempty"`
}
