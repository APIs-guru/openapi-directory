package shared

// InstanceIdentity
// Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.
type InstanceIdentity struct {
	Document  *string `json:"Document,omitempty"`
	Signature *string `json:"Signature,omitempty"`
}
