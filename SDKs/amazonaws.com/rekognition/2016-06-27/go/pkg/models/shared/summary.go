package shared

// Summary
// <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p>
type Summary struct {
	S3Object *S3Object `json:"S3Object,omitempty"`
}
