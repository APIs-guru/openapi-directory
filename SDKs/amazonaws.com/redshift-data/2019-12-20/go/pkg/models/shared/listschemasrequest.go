package shared

type ListSchemasRequest struct {
	ClusterIdentifier string  `json:"ClusterIdentifier"`
	ConnectedDatabase *string `json:"ConnectedDatabase"`
	Database          string  `json:"Database"`
	DbUser            *string `json:"DbUser"`
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	SchemaPattern     *string `json:"SchemaPattern"`
	SecretArn         *string `json:"SecretArn"`
}
