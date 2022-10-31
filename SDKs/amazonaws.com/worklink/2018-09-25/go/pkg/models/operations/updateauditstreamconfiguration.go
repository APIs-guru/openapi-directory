package operations

type UpdateAuditStreamConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
