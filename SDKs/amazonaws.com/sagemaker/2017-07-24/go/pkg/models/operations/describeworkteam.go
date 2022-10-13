package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkteamXAmzTargetEnum string

const (
	DescribeWorkteamXAmzTargetEnumSageMakerDescribeWorkteam DescribeWorkteamXAmzTargetEnum = "SageMaker.DescribeWorkteam"
)

type DescribeWorkteamHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkteamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkteamRequest struct {
	Headers DescribeWorkteamHeaders
	Request shared.DescribeWorkteamRequest `request:"mediaType=application/json"`
}

type DescribeWorkteamResponse struct {
	ContentType              string
	DescribeWorkteamResponse *shared.DescribeWorkteamResponse
	StatusCode               int64
}
