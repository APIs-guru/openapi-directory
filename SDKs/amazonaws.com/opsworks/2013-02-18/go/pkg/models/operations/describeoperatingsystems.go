package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOperatingSystemsXAmzTargetEnum string

const (
	DescribeOperatingSystemsXAmzTargetEnumOpsWorks20130218DescribeOperatingSystems DescribeOperatingSystemsXAmzTargetEnum = "OpsWorks_20130218.DescribeOperatingSystems"
)

type DescribeOperatingSystemsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOperatingSystemsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeOperatingSystemsRequest struct {
	Headers DescribeOperatingSystemsHeaders
}

type DescribeOperatingSystemsResponse struct {
	ContentType                      string
	DescribeOperatingSystemsResponse *shared.DescribeOperatingSystemsResponse
	StatusCode                       int64
}
