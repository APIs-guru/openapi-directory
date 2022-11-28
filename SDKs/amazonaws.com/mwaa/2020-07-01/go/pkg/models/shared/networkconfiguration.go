package shared

// NetworkConfiguration
// The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
type NetworkConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
}
