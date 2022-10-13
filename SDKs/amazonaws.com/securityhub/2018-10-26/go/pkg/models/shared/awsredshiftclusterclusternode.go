package shared

type AwsRedshiftClusterClusterNode struct {
	NodeRole         *string `json:"NodeRole"`
	PrivateIPAddress *string `json:"PrivateIpAddress"`
	PublicIPAddress  *string `json:"PublicIpAddress"`
}
