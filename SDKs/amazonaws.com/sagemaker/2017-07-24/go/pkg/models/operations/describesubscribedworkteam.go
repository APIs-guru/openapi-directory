package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSubscribedWorkteamXAmzTargetEnum string

const (
	DescribeSubscribedWorkteamXAmzTargetEnumSageMakerDescribeSubscribedWorkteam DescribeSubscribedWorkteamXAmzTargetEnum = "SageMaker.DescribeSubscribedWorkteam"
)

type DescribeSubscribedWorkteamHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSubscribedWorkteamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
