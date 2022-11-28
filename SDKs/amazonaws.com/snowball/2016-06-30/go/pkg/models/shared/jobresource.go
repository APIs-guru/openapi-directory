package shared

// JobResource
// Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
type JobResource struct {
	Ec2AmiResources []Ec2AmiResource `json:"Ec2AmiResources,omitempty"`
	LambdaResources []LambdaResource `json:"LambdaResources,omitempty"`
	S3Resources     []S3Resource     `json:"S3Resources,omitempty"`
}
