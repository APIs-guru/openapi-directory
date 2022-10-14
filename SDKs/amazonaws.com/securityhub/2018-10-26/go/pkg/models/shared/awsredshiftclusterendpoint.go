package shared

type AwsRedshiftClusterEndpoint struct {
	Address *string `json:"Address,omitempty"`
	Port    *int64  `json:"Port,omitempty"`
}
