package operations

type PutFindingsPublicationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration struct {
	PublishClassificationFindings *bool `json:"publishClassificationFindings,omitempty"`
	PublishPolicyFindings         *bool `json:"publishPolicyFindings,omitempty"`
}

type PutFindingsPublicationConfigurationRequestBody struct {
	ClientToken              *string                                                                 `json:"clientToken,omitempty"`
	SecurityHubConfiguration *PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration `json:"securityHubConfiguration,omitempty"`
}

type PutFindingsPublicationConfigurationRequest struct {
	Headers PutFindingsPublicationConfigurationHeaders
	Request PutFindingsPublicationConfigurationRequestBody `request:"mediaType=application/json"`
}

type PutFindingsPublicationConfigurationResponse struct {
	AccessDeniedException                       *interface{}
	ConflictException                           *interface{}
	ContentType                                 string
	InternalServerException                     *interface{}
	PutFindingsPublicationConfigurationResponse map[string]interface{}
	ResourceNotFoundException                   *interface{}
	ServiceQuotaExceededException               *interface{}
	StatusCode                                  int64
	ThrottlingException                         *interface{}
	ValidationException                         *interface{}
}
