package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLoggingConfigurationXAmzTargetEnum string

const (
	DescribeLoggingConfigurationXAmzTargetEnumNetworkFirewall20201112DescribeLoggingConfiguration DescribeLoggingConfigurationXAmzTargetEnum = "NetworkFirewall_20201112.DescribeLoggingConfiguration"
)

type DescribeLoggingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLoggingConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
