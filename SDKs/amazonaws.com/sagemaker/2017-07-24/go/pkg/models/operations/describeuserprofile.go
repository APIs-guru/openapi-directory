package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserProfileXAmzTargetEnum string

const (
	DescribeUserProfileXAmzTargetEnumSageMakerDescribeUserProfile DescribeUserProfileXAmzTargetEnum = "SageMaker.DescribeUserProfile"
)

type DescribeUserProfileHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUserProfileRequest struct {
	Headers DescribeUserProfileHeaders
	Request shared.DescribeUserProfileRequest `request:"mediaType=application/json"`
}

type DescribeUserProfileResponse struct {
	ContentType                 string
	DescribeUserProfileResponse *shared.DescribeUserProfileResponse
	ResourceNotFound            *interface{}
	StatusCode                  int64
}
