package shared

type JobResource struct {
	Ec2AmiResources []Ec2AmiResource `json:"Ec2AmiResources,omitempty"`
	LambdaResources []LambdaResource `json:"LambdaResources,omitempty"`
	S3Resources     []S3Resource     `json:"S3Resources,omitempty"`
}
