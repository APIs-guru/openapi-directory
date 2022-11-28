package shared

// ExportJobResource
// Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
type ExportJobResource struct {
	RoleArn        string  `json:"RoleArn"`
	S3URLPrefix    string  `json:"S3UrlPrefix"`
	SegmentID      *string `json:"SegmentId,omitempty"`
	SegmentVersion *int64  `json:"SegmentVersion,omitempty"`
}
