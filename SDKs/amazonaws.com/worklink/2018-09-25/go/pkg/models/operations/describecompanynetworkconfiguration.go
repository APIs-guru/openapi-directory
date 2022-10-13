package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCompanyNetworkConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeCompanyNetworkConfigurationRequestBody struct {
	FleetArn string `json:"FleetArn"`
}

type DescribeCompanyNetworkConfigurationRequest struct {
	Headers DescribeCompanyNetworkConfigurationHeaders
	Request DescribeCompanyNetworkConfigurationRequestBody `request:"mediaType=application/json"`
}

type DescribeCompanyNetworkConfigurationResponse struct {
	ContentType                                 string
	DescribeCompanyNetworkConfigurationResponse *shared.DescribeCompanyNetworkConfigurationResponse
	InternalServerErrorException                *interface{}
	InvalidRequestException                     *interface{}
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
	TooManyRequestsException                    *interface{}
	UnauthorizedException                       *interface{}
}
