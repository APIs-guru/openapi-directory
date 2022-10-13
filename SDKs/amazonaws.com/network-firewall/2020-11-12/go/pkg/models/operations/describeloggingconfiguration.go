package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLoggingConfigurationXAmzTargetEnum string

const (
	DescribeLoggingConfigurationXAmzTargetEnumNetworkFirewall20201112DescribeLoggingConfiguration DescribeLoggingConfigurationXAmzTargetEnum = "NetworkFirewall_20201112.DescribeLoggingConfiguration"
)

type DescribeLoggingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLoggingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLoggingConfigurationRequest struct {
	Headers DescribeLoggingConfigurationHeaders
	Request shared.DescribeLoggingConfigurationRequest `request:"mediaType=application/json"`
}

type DescribeLoggingConfigurationResponse struct {
	ContentType                          string
	DescribeLoggingConfigurationResponse *shared.DescribeLoggingConfigurationResponse
	InternalServerError                  *interface{}
	InvalidRequestException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
