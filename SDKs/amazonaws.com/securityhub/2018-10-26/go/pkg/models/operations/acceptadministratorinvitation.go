package operations

type AcceptAdministratorInvitationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AcceptAdministratorInvitationRequestBody struct {
	AdministratorID string `json:"AdministratorId"`
	InvitationID    string `json:"InvitationId"`
}

type AcceptAdministratorInvitationRequest struct {
	Headers AcceptAdministratorInvitationHeaders
	Request AcceptAdministratorInvitationRequestBody `request:"mediaType=application/json"`
}

type AcceptAdministratorInvitationResponse struct {
	AcceptAdministratorInvitationResponse map[string]interface{}
	ContentType                           string
	InternalException                     *interface{}
	InvalidAccessException                *interface{}
	InvalidInputException                 *interface{}
	LimitExceededException                *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
}
