package shared

// S3Reference
// <p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> </note>
type S3Reference struct {
	Bucket        string  `json:"bucket"`
	Key           string  `json:"key"`
	ObjectVersion *string `json:"objectVersion,omitempty"`
}
