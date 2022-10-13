package shared

type JobResource struct {
	Ec2AmiResources []Ec2AmiResource `json:"Ec2AmiResources"`
	LambdaResources []LambdaResource `json:"LambdaResources"`
	S3Resources     []S3Resource     `json:"S3Resources"`
}
