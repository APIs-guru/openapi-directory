package operations

type AcceptInvitationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AcceptInvitationRequestBody struct {
	AdministratorAccountID *string `json:"administratorAccountId,omitempty"`
	InvitationID           string  `json:"invitationId"`
	MasterAccount          *string `json:"masterAccount,omitempty"`
}

type AcceptInvitationRequest struct {
	Headers AcceptInvitationHeaders
	Request AcceptInvitationRequestBody `request:"mediaType=application/json"`
}

type AcceptInvitationResponse struct {
	AcceptInvitationResponse      map[string]interface{}
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
