package shared

// S3Object
// <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p>
type S3Object struct {
	Bucket  *string `json:"Bucket,omitempty"`
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
