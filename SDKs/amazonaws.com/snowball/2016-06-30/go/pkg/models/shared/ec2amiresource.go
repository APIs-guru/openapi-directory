package shared

// Ec2AmiResource
// A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device.
type Ec2AmiResource struct {
	AmiID         string  `json:"AmiId"`
	SnowballAmiID *string `json:"SnowballAmiId,omitempty"`
}
