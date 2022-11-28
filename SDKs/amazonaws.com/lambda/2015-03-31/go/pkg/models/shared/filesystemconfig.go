package shared

// FileSystemConfig
// Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.
type FileSystemConfig struct {
	Arn            string `json:"Arn"`
	LocalMountPath string `json:"LocalMountPath"`
}
