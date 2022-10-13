package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServicesXAmzTargetEnum string

const (
	DescribeServicesXAmzTargetEnumAwsSupport20130415DescribeServices DescribeServicesXAmzTargetEnum = "AWSSupport_20130415.DescribeServices"
)

type DescribeServicesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServicesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeServicesRequest struct {
	Headers DescribeServicesHeaders
	Request shared.DescribeServicesRequest `request:"mediaType=application/json"`
}

type DescribeServicesResponse struct {
	ContentType              string
	DescribeServicesResponse *shared.DescribeServicesResponse
	InternalServerError      *interface{}
	StatusCode               int64
}
