package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOrganizationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeOrganizationConfigurationRequest struct {
	Headers DescribeOrganizationConfigurationHeaders
}

type DescribeOrganizationConfigurationResponse struct {
	ContentType                               string
	DescribeOrganizationConfigurationResponse *shared.DescribeOrganizationConfigurationResponse
	InternalException                         *interface{}
	InvalidAccessException                    *interface{}
	InvalidInputException                     *interface{}
	LimitExceededException                    *interface{}
	StatusCode                                int64
}
