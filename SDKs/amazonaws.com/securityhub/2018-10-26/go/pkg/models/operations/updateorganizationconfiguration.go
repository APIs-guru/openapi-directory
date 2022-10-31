package operations

type UpdateOrganizationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
