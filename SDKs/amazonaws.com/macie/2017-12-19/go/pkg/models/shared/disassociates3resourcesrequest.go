package shared

type DisassociateS3ResourcesRequest struct {
	AssociatedS3Resources []S3Resource `json:"associatedS3Resources"`
	MemberAccountID       *string      `json:"memberAccountId,omitempty"`
}
