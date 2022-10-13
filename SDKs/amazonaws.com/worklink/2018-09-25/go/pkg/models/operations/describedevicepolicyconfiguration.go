package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDevicePolicyConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDevicePolicyConfigurationRequestBody struct {
	FleetArn string `json:"FleetArn"`
}

type DescribeDevicePolicyConfigurationRequest struct {
	Headers DescribeDevicePolicyConfigurationHeaders
	Request DescribeDevicePolicyConfigurationRequestBody `request:"mediaType=application/json"`
}

type DescribeDevicePolicyConfigurationResponse struct {
	ContentType                               string
	DescribeDevicePolicyConfigurationResponse *shared.DescribeDevicePolicyConfigurationResponse
	InternalServerErrorException              *interface{}
	InvalidRequestException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
	UnauthorizedException                     *interface{}
}
