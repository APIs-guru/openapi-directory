package operations

type UpdateDevicePolicyConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDevicePolicyConfigurationRequestBody struct {
	DeviceCaCertificate *string `json:"DeviceCaCertificate"`
	FleetArn            string  `json:"FleetArn"`
}

type UpdateDevicePolicyConfigurationRequest struct {
	Headers UpdateDevicePolicyConfigurationHeaders
	Request UpdateDevicePolicyConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateDevicePolicyConfigurationResponse struct {
	ContentType                             string
	InternalServerErrorException            *interface{}
	InvalidRequestException                 *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	TooManyRequestsException                *interface{}
	UnauthorizedException                   *interface{}
	UpdateDevicePolicyConfigurationResponse map[string]interface{}
}
