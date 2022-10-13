package shared

type AwsRedshiftClusterEndpoint struct {
	Address *string `json:"Address"`
	Port    *int64  `json:"Port"`
}
