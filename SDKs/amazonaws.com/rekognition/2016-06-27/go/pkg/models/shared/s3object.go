package shared

// S3Object
// <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p>
type S3Object struct {
	Bucket  *string `json:"Bucket,omitempty"`
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
