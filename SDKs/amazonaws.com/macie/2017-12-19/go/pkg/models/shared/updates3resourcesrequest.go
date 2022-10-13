package shared

type UpdateS3ResourcesRequest struct {
	MemberAccountID   *string                          `json:"memberAccountId"`
	S3ResourcesUpdate []S3ResourceClassificationUpdate `json:"s3ResourcesUpdate"`
}
