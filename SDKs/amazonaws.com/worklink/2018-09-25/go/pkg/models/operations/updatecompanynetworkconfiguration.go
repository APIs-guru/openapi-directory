package operations

type UpdateCompanyNetworkConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCompanyNetworkConfigurationRequestBody struct {
	FleetArn         string   `json:"FleetArn"`
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            string   `json:"VpcId"`
}

type UpdateCompanyNetworkConfigurationRequest struct {
	Headers UpdateCompanyNetworkConfigurationHeaders
	Request UpdateCompanyNetworkConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateCompanyNetworkConfigurationResponse struct {
	ContentType                               string
	InternalServerErrorException              *interface{}
	InvalidRequestException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
	UnauthorizedException                     *interface{}
	UpdateCompanyNetworkConfigurationResponse map[string]interface{}
}
