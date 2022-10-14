package operations

type UpdateAuditStreamConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAuditStreamConfigurationRequestBody struct {
	AuditStreamArn *string `json:"AuditStreamArn,omitempty"`
	FleetArn       string  `json:"FleetArn"`
}

type UpdateAuditStreamConfigurationRequest struct {
	Headers UpdateAuditStreamConfigurationHeaders
	Request UpdateAuditStreamConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateAuditStreamConfigurationResponse struct {
	ContentType                            string
	InternalServerErrorException           *interface{}
	InvalidRequestException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
	UnauthorizedException                  *interface{}
	UpdateAuditStreamConfigurationResponse map[string]interface{}
}
