package shared

type ListS3ResourcesResult struct {
	NextToken   *string                    `json:"nextToken,omitempty"`
	S3Resources []S3ResourceClassification `json:"s3Resources,omitempty"`
}
