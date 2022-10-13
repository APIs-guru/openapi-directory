package shared

type AssociateS3ResourcesRequest struct {
	MemberAccountID *string                    `json:"memberAccountId"`
	S3Resources     []S3ResourceClassification `json:"s3Resources"`
}
