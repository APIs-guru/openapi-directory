package operations

type UpdateOrganizationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateOrganizationConfigurationRequestBody struct {
	AutoEnable bool `json:"AutoEnable"`
}

type UpdateOrganizationConfigurationRequest struct {
	Headers UpdateOrganizationConfigurationHeaders
	Request UpdateOrganizationConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationConfigurationResponse struct {
	ContentType                             string
	InternalException                       *interface{}
	InvalidAccessException                  *interface{}
	InvalidInputException                   *interface{}
	LimitExceededException                  *interface{}
	StatusCode                              int64
	UpdateOrganizationConfigurationResponse map[string]interface{}
}
