package shared

type RedshiftSourceConfig struct {
	ClusterIdentifier string           `json:"ClusterIdentifier"`
	DatabaseHost      string           `json:"DatabaseHost"`
	DatabaseName      string           `json:"DatabaseName"`
	DatabasePort      int64            `json:"DatabasePort"`
	RoleArn           string           `json:"RoleArn"`
	SecretManagerArn  string           `json:"SecretManagerArn"`
	TableName         string           `json:"TableName"`
	VpcConfiguration  VpcConfiguration `json:"VpcConfiguration"`
}
