package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSubscribedWorkteamXAmzTargetEnum string

const (
	DescribeSubscribedWorkteamXAmzTargetEnumSageMakerDescribeSubscribedWorkteam DescribeSubscribedWorkteamXAmzTargetEnum = "SageMaker.DescribeSubscribedWorkteam"
)

type DescribeSubscribedWorkteamHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSubscribedWorkteamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSubscribedWorkteamRequest struct {
	Headers DescribeSubscribedWorkteamHeaders
	Request shared.DescribeSubscribedWorkteamRequest `request:"mediaType=application/json"`
}

type DescribeSubscribedWorkteamResponse struct {
	ContentType                        string
	DescribeSubscribedWorkteamResponse *shared.DescribeSubscribedWorkteamResponse
	StatusCode                         int64
}
