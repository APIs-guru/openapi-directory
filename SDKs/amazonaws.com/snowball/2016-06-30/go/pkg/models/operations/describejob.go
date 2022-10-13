package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeJobXAmzTargetEnum string

const (
	DescribeJobXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeJob DescribeJobXAmzTargetEnum = "AWSIESnowballJobManagementService.DescribeJob"
)

type DescribeJobHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeJobRequest struct {
	Headers DescribeJobHeaders
	Request shared.DescribeJobRequest `request:"mediaType=application/json"`
}

type DescribeJobResponse struct {
	ContentType              string
	DescribeJobResult        *shared.DescribeJobResult
	InvalidResourceException *interface{}
	StatusCode               int64
}
