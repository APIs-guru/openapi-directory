package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityProviderConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeIdentityProviderConfigurationRequestBody struct {
	FleetArn string `json:"FleetArn"`
}

type DescribeIdentityProviderConfigurationRequest struct {
	Headers DescribeIdentityProviderConfigurationHeaders
	Request DescribeIdentityProviderConfigurationRequestBody `request:"mediaType=application/json"`
}

type DescribeIdentityProviderConfigurationResponse struct {
	ContentType                                   string
	DescribeIdentityProviderConfigurationResponse *shared.DescribeIdentityProviderConfigurationResponse
	InternalServerErrorException                  *interface{}
	InvalidRequestException                       *interface{}
	ResourceNotFoundException                     *interface{}
	StatusCode                                    int64
	TooManyRequestsException                      *interface{}
	UnauthorizedException                         *interface{}
}
